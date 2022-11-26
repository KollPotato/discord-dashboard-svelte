<script lang="ts">
    export let text: string
    export let position: "top" | "left" | "right" | "bottom" = "top"

    const positionMap = {
        top: "-mt-16",
        left: "",
        right: "",
        bottom: ""
    }

    const positionStyle = positionMap[position]

    let width: string

</script>

<div class="tooltip-box group">
    <slot />
    <div class="tooltip group-hover:scale-100 {positionStyle}">
        {text}
    </div>
</div>

<style>
    .tooltip-box {
        @apply w-fit inline-block;
    }
    .tooltip {
        @apply absolute min-w-max w-auto block p-2 px-3
        rounded-md shadow-md text-white
        bg-[#18191C] text-sm font-medium transition-all
        duration-75 scale-0 origin-bottom;
    }
</style>