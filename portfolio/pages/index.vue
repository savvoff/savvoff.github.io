<template>
  <div class="content">
    <bg-title />
    <div class="grid" ref="grid">
      <a
        v-for="(project, idx) in projects"
        :key="idx"
        class="grid__item"
        :href="`#preview-${idx + 1}`"
        :data-title="project.title"
        :data-color="projectsColors[idx]"
        :style="{
          '--grid-row': gridPositions[idx]?.row || 1,
          '--grid-column': gridPositions[idx]?.col || 1
        }"
      >
        <div
          class="grid__item-img"
          :style="`background-color: ${projectsColors[idx]}; background-image: url(${project.image});`"
        ></div>
      </a>
    </div>
    <div class="preview">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        :id="`preview-${idx + 1}`"
        :style="{ '--span-color': projectsColors[idx] }"
        class="preview__item"
      >
        <button class="preview__item-back unbutton"><span>Back</span></button>
        <div class="preview__item-imgwrap">
          <div
            class="preview__item-img"
            :style="`background-color: ${projectsColors[idx]}; background-image: url(${project.image});`"
          ></div>
        </div>
        <h2 data-splitting class="preview__item-title">{{ project.title }}</h2>
        <div class="preview__item-content">
          <div class="preview__item-meta">
            <span>{{ project.category }}</span>
            <span>{{ project.date }}</span>
          </div>
          <p class="preview__item-description">
            {{ project.desc }}
          </p>
          <div class="preview__item-info">
            <p class="preview__item-meta">Used technologies:</p>
            <span v-for="(lib, id) in project.stack" :key="id">
              {{ lib }}
            </span>
          </div>
          <a v-if="project.link" class="preview__item-button" :href="project.link" target="_blank">See site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import imagesLoaded from 'imagesloaded'

  import BgTitle from '~/components/BgTitle.vue'

  const { $grid, $event } = useNuxtApp()
  const { public: { projects } } = useRuntimeConfig()
  const grid = ref(null)

  const colors = [
    '#684ee3',
    '#c0ec59',
    '#0053d4',
    '#2187f1',
    '#54c4db',
    '#9a4fd8',
    '#f4c466'
  ]

  /**
   * Generates dynamic staggered chessboard positions based on total item count
   * @param {number} totalItemsCount - Total number of projects
   * @returns {Array<{ row: number, col: number }>}
   */
  function calculateChessboardPositions(totalItemsCount) {
    const slotPresets = {
      4: [
        { row: 5, col: 10 }, { row: 5, col: 34 },
        { row: 28, col: 8 }, { row: 28, col: 36 }
      ],
      5: [
        { row: 4, col: 8 }, { row: 4, col: 36 },
        { row: 18, col: 22 },
        { row: 32, col: 8 }, { row: 32, col: 36 }
      ],
      6: [
        { row: 4, col: 8 }, { row: 4, col: 36 },
        { row: 18, col: 14 }, { row: 18, col: 30 },
        { row: 32, col: 8 }, { row: 32, col: 36 }
      ],
      7: [
        { row: 4, col: 5 }, { row: 4, col: 23 }, { row: 4, col: 41 },
        { row: 18, col: 14 }, { row: 18, col: 32 },
        { row: 32, col: 10 }, { row: 32, col: 30 }
      ],
      8: [
        { row: 4, col: 5 }, { row: 4, col: 23 }, { row: 4, col: 41 },
        { row: 18, col: 14 }, { row: 18, col: 32 },
        { row: 32, col: 5 }, { row: 32, col: 23 }, { row: 32, col: 41 }
      ]
    }

    if (slotPresets[totalItemsCount]) {
      return slotPresets[totalItemsCount]
    }

    const positions = []
    const rowTracks = [4, 18, 32]
    const columnsPerRow = [
      [5, 23, 41],
      [14, 32],
      [8, 26, 44]
    ]
    let itemIndex = 0
    let cycleIndex = 0

    while (itemIndex < totalItemsCount) {
      for (let rowIndex = 0; rowIndex < rowTracks.length && itemIndex < totalItemsCount; rowIndex++) {
        const availableColumns = columnsPerRow[rowIndex]
        const columnCoordinate = availableColumns[cycleIndex % availableColumns.length]
        positions.push({ row: rowTracks[rowIndex], col: columnCoordinate })
        itemIndex++
      }
      cycleIndex++
    }

    return positions
  }

  const gridPositions = computed(() => {
    return calculateChessboardPositions(projects.length)
  })

  const projectsColors = computed(() => {
    const colorsArray = []
    let iteration = 0
    const totalIterations = Math.max(1, Math.ceil(projects.length / colors.length))
    while (iteration < totalIterations) {
      colorsArray.push(...colors)
      iteration++
    }
    return colorsArray
  })

  onMounted(() => {
    imagesLoaded('.preview .preview__item-img', { background: true }, () => {
      $event('imgs:loaded')
      // Initialize grid
      const item = $grid(grid.value)
      // Change cursor text status when hovering a grid item
      item.on('mouseEnterItem', itemTitle => window.cursor.DOM.text.innerHTML = itemTitle)
      item.on('mouseLeaveItem', _ => window.cursor.DOM.text.innerHTML = '')
      window.cursor.renderedStyles['scaleTrail'].current = 1
    })
  })

  const exposed = { projects }
  defineExpose(exposed)
</script>