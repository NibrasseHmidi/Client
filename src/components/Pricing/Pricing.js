import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
	ProfileBanner,
	PricingImg,
	ImgProf,
	LabelConv,
	FigureCov,
	FigCaption,
	PictureProfile,
	Span,
	Addb,
	Editp,
	ImgAvatar
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';
import { AiFillCamera,AiFillFolderAdd,AiFillEdit } from 'react-icons/ai';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading> Your Profil </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Create, maintain and store your data with Delta.
					</TextWrapper>

<ProfileBanner>
<ImgProf src="https://fbcouv.com/wp-content/uploads/2015/09/couverture-facebook-chat-poisson-repas.jpg" alt="" />
<LabelConv >

 <input type="file" accept="image/*"  style={{display: "none" , cursor:'pointer'}} />
 <FigureCov>
 <FigCaption>
 <Span>  
 
 <AiFillCamera style={{width:500}}/>
</Span>
	
 </FigCaption>
 </FigureCov>
</LabelConv>
</ProfileBanner>
<PictureProfile>
<Editp>Edit Profile <AiFillEdit/></Editp>
<Addb> Add Product <AiFillFolderAdd/></Addb>
<ImgAvatar src="https://avatars1.githubusercontent.com/u/11435231?s=460&v=4" alt="avatar"/>
</PictureProfile>




<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingImg src={card.img}/>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<Button>Get Started</Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>

				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
