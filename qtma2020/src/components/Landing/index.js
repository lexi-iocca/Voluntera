import React from 'react';
import SignUpDialog from '../SignUpDialog';
import { Link } from 'react-router-dom';
import Navigation from '../NavBar';
import logoWhite from '../../assets/img/logo-white.svg';
import OrgCard from '../OrgCard';
import StepsBlock from '../StepsBlock';
import marthas from '../../assets/img/marthas.jpg';
import lung from '../../assets/img/lung.jpg';
import kidney from '../../assets/img/kidney.jpg';

function Landing() {
	const orgs = [
		{
			title: "Martha's Table",
			img: marthas,
			location: 'Kingston, Ontario',
			desc:
				'Help people in need have a nutritious meal and find community.'
		},
		{
			title: 'The Kidney Foundation of Canada ',
			img: kidney,
			location: 'Kingston, Ontario',
			desc:
				'Fund research and potential breakthroughs that will change lives.'
		},
		{
			title: 'Lung Health Foundation',
			img: lung,
			location: 'Kingston, Ontario',
			desc:
				'Dedicated to ending gaps in the prevention, diagnosis, and care of lung disease in Canada.'
		}
	];

	const renderOrgCards = () => {
		return orgs.map((org, i) => {
			return (
				<OrgCard
					title={org.title}
					img={org.img}
					location={org.location}
					desc={org.desc}
					key={i}
				/>
			);
		});
	};

	return (
		<div>
			<Navigation
				logo={logoWhite}
				fontColor='#fff'
				background='#437F62'
				signUpColor='#1B4843'
				signUpBackground='#F3FDFC'
			/>
			<div className='landing-body'>
				<div className='landing-top'>
					<div className='image-7'>
						<img
							className='landing-rectangle-7'
							src='437F62.png'
							alt='green'
						></img>
					</div>

					<div className='landing-title1'>
						The one-stop shop for social impact
					</div>
					<div className='landing-p1'>
						Voluntera understands that different people want to
						create a social impact in different ways. All of our
						partner organizations accept donations of both time and
						money.
					</div>
					<div className='cards-row'>{renderOrgCards()}</div>
					<div className='h-middle-box'>
						<div className='v-middle-box'>
							<p className='landing-subtitle'>
								Here are some of our partnered organizations
							</p>
							<p className='landing-p2'>
								Our partner organizations are selected after
								months of research to check for credibility,
								trust, and true need. We curate these
								opportunities to best match your profile.{' '}
							</p>


							
							<div class='flex-row'>

								<div class='flex-col'>
								<a
									href='https://www.cysticfibrosis.ca/'
									target='_blank'
								>
									<img
										src='cystic_fibrosis_canada.svg'
										alt='cystic fibrosis canada'
									></img>
								</a></div>
								
								<div clas='flex-col'>
								<a href='https://kidney.ca/' target='_blank'>
									<img
										src='kidney_foundation.svg'
										alt='kidney foundation'
									></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='https://lunghealth.ca/'
									target='_blank'
								>
									<img
										src='lung_health_foundation.svg'
										alt='lung health foundation'
									></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='http://www.marthastable.ca/'
									target='_blank'
								>
									<img
										src='marthas_table.svg'
										alt="Martha's table"
									></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='https://bfo-kingston.ca/'
									target='_blank'
								>
									<img
										src='bereaved_ontario.svg'
										alt='Bereaved Families of Ontario'
									></img>
								</a></div></div>



								<div class='flex-row'>

								<div class='flex-col'>
								<a href='https://www.neads.ca/' target='_blank'>
									<img src='neads.svg' alt='NEADS'></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='https://www.amhs-kfla.ca/'
									target='_blank'
								>
									<img
										src='amhs_kfla.svg'
										alt='AMHS KFLA'
									></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='https://www.cnib.ca/en?region=on'
									target='_blank'
								>
									<img
										src='cnib_foundation.svg'
										alt='CNIB Foundation'
									></img>
								</a></div>

								<div class='flex-col'>
								<a
									href='https://www.kingstonfoodbank.ca/'
									target='_blank'
								>
									<img
										src='foodbank.svg'
										alt='Partners in Mission Foodbank'
									></img>
								</a></div>

								<div class='flex-col'></div>
								<a
									href='https://www.marchofdimes.ca/en-ca'
									target='_blank'
								>
									<img
										src='march_canada.svg'
										alt='March of Dimes Canada'
									></img>
								</a>
							
								</div>
							
						</div>
					</div>

					<StepsBlock></StepsBlock>

					<div className='h-middle-box2'>
						<h1 className='landing-title3'>
							Make an impact the way that works best for you
						</h1>
						<p className='landing-p4'>
							For every donation, or time commitment, Voluntera
							will further your contributions by continuing to
							support the organization.
						</p>
					</div>
					<div className='h-middle-box3'>
						<img
							className='landing-rectangle-5'
							src='e5e5e5.png'
							alt='Picture 1'
						></img>
						<div className='v-middle-box2'>
							<div className='landing-subtitle2'>
								Volunteer your time
							</div>
							<div className='landing-p5'>
								Apply to volunteer at select local charities
								chosen by our team.
							</div>
							<Link
								to='/donate'
								style={{ textDecoration: 'none' }}
							>
								<div className='landing-subtitle3'>
									Donate money
								</div>
								<div className='landing-p6'>
									Not enough time? You can donate money
									towards organizations too.
								</div>
							</Link>
						</div>
					</div>
					<div className='image-4'>
						<img
							className='landing-rectangle-6'
							src='7eb9b2.png'
							alt='Picture 1'
						></img>
					</div>
					<h1 className='landing-title4'>
						Sign up today and start making an impact{' '}
					</h1>
					<button className='landing-button2'>Get Started</button>
				</div>
			</div>

		</div>
	);
}

export default Landing;
