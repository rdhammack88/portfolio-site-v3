<!-- Project Portfolio Section -->
<section class="projects" id="projects"> <!-- mt-5 -->
	<div class="container">
		<h2 class="text-center">Portfolio</h2>
		<div class="row">

		<?php
            $jsonFile = file_get_contents("./assets/projects.json");
            $jsonData = json_decode($jsonFile, true);
            $projects = $jsonData['projects'];

            foreach ($projects as $project_set) {
                foreach ($project_set as $project_category => $project_info) {
                    foreach ($project_info as $project) {
                        ?>

			<div class="project-container col-10 offset-1 col-lg-4 col-md-6 my-5 mx-auto text-center" data-project-name="<?php echo $project['shortname']; ?>"> 
			<!--  col-sm-8 offset-sm-2 -->
				<div class="card">
					<div class="card-heading">
						<img src="<?php echo $project['projectimage']; ?>" alt="" class="project-image">
						<h4 class="card-title"><?php echo $project['projectname']; ?></h4>
					</div>
					<div class="card-body">
						<div>
		<p class="mt-3 mb-1 text-justify"><strong>Technologies:</strong> <?php echo $project['techused']; ?></p>
        <p  class="text-justify"><strong>Description:</strong> <?php echo $project['description']; ?></p>
        

        <?php if ($project['completed'] === 'false') {
            ?>
            <br/>
            <p class="text-justify text-danger mb-0">* This site is not 100% completed.</p>
            <p class="text-justify text-info">** <?php echo $project['completed_description']; ?></p>
        <?php
        } ?>
						</div>
					</div>
					<div class="card-footer">

					<!-- Project and Code Repository Links -->
        <p class="mt-4 mr-4">
            <a href="<?php echo $project['projecturl']; ?>" target="_blank" class="btn btn-link p-2 pr-4">
                <i class="fas fa-code mr-2"></i>Demo
                <!-- Check out the project -->
            </a>
        <!-- </p>
        <p> -->
            <a href="<?php echo $project['githuburl']; ?>" target="_blank" class="btn btn-link p-2 pr-4">
				<i class="fab fa-github fa-1x mr-2"></i>
				Code
                <!-- Check out the code -->
            </a>
        </p>

					</div>
				</div>				
			</div> <!-- End of Project Container -->						

			<!-- End of all 3 PHP FOREACH -->
			<?php
                    }
                }
            }
            ?>

		</div> <!-- End of Row -->
	</div> <!-- End of .container -->
</section><!-- Project Portfolio Section -->

