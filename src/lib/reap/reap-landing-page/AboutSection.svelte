<script>
    import ReapGeneralStats from "./ReapGeneralStats.svelte";
    import ReapCollaborationInstitutes from "./ReapCollaborationInstitutes.svelte";
    // import {videoThumbnail} from '/static/reap/course-video-thumbnail.jpg'
</script>


<div class=" py-16 px-24  ">
    <h2 class="text-3xl pb-8 text-primary font-bold ">Credible courses. Incredible track record.</h2>
<div class="grid grid-cols-2 gap-8">
    <div class="flex flex-col justify-between">
    <p class="pb-6 text-sm text-darkGray leading-6">REAP is a Government of India initiative designed to enable quality skill development accessible to every Indian. This online platform offers courses and resources to empower individuals to take charge of their careers and launch their own businesses. </p>
    <div class="pb-6">
        <ReapGeneralStats />

    </div>
    <div class="pb-6">
        <ReapCollaborationInstitutes />
    </div>
</div>

<div>
<img src='/reap/course-video-thumbnail.jpg' alt="" class="">
</div>
</div>
</div>