<!-- Project Portfolio Section -->
<section class="projects" id="projects"> <!-- mt-5 -->
	<div class="project-container container">
		<h2 class="text-center section-title">Portfolio</h2>
		<!-- <div class="row"> -->
        <div class="cards text-center">

		<?php
            $jsonFile = file_get_contents("./assets/projects.json");
            $jsonData = json_decode($jsonFile, true);
            $projects = $jsonData['projects'];

            foreach ($projects as $project_set) {
                foreach ($project_set as $project_category => $project_info) {
                    foreach ($project_info as $project) {
                        ?>

				<div class="card">
					<div class="card-heading">
                        <!-- No JS Activated -->
                        <noscript>
                            <img class="card-image" src="<?php echo $project['projectimage']; ?>" alt="<?php echo $project['projectimage']; ?> Project Image" title="<?php echo $project['projectname']; ?>">
                        </noscript>
						<img class="card-image lazyload" data-srcset="<?php echo $project['projectimage']; ?>" alt="<?php echo $project['projectimage']; ?> Project Image" title="<?php echo $project['projectname']; ?>">
					</div>
                    
					<div class="card-body">
                        <h3 class="card-title">
                            <?php echo $project['projectname']; ?>
                        </h3>
						<div class="card-body__description">
                            <p class=""><strong>Technologies:</strong> <?php echo $project['techused']; ?></p>
                            <p  class=""><strong>Description:</strong> <?php echo $project['description']; ?></p>
        

        <?php if ($project['completed'] === 'false') {
            ?>
            <!-- <br/> -->
            <!-- <p class="text-justify text-danger mb-0">* This site is not 100% completed.</p> -->
            <!-- <p class="text-justify text-info">** <?php //echo $project['completed_description']; ?></p> -->
        <?php
        } ?>
						</div>

					<!-- Project and Code Repository Links -->
                <div class="card-footer">
                    <a href="<?php echo $project['projecturl']; ?>" target="_blank" class="btn btn-link">
                        <i class="fas fa-code"></i>Demo
                    </a>
                    <a href="<?php echo $project['githuburl']; ?>" target="_blank" class="btn btn-link">
                        <i class="fab fa-github fa-1x"></i>
                        Code
                    </a>
                </div>

            </div>
        </div>					

			<!-- End of all 3 PHP FOREACH -->
			<?php
                    }
                }
            }
            ?>

		</div> <!--  End of .card -->
	</div> <!-- End of .project-container -->
</section><!-- Project Portfolio Section -->

