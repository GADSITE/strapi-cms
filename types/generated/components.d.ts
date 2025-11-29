import type { Schema, Attribute } from '@strapi/strapi';

export interface PrivacySectionText extends Schema.Component {
  collectionName: 'components_privacy_section_texts';
  info: {
    displayName: 'Se\u00E7\u00E3o (Texto)';
    icon: 'align-left';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface PrivacySectionList extends Schema.Component {
  collectionName: 'components_privacy_section_lists';
  info: {
    displayName: 'Se\u00E7\u00E3o (Lista)';
    icon: 'list';
  };
  attributes: {
    title: Attribute.String;
    intro_text: Attribute.Text;
    items: Attribute.Component<'privacy.list-item', true>;
  };
}

export interface PrivacyListItem extends Schema.Component {
  collectionName: 'components_privacy_list_items';
  info: {
    displayName: 'Item da Lista';
    icon: 'dot-circle';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomeSubTitle extends Schema.Component {
  collectionName: 'components_home_sub_titles';
  info: {
    displayName: 'SubTitle';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.String;
  };
}

export interface HomeSlider extends Schema.Component {
  collectionName: 'components_home_sliders';
  info: {
    displayName: 'Slider';
    icon: 'apps';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos'>;
    subTitle: Attribute.Component<'home.sub-title', true>;
    title: Attribute.String;
  };
}

export interface HomeCases extends Schema.Component {
  collectionName: 'components_home_cases';
  info: {
    displayName: 'Cases';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.RichText;
    cases: Attribute.Relation<
      'home.cases',
      'oneToMany',
      'api::cases.case-study'
    >;
  };
}

export interface HomeCallToAction extends Schema.Component {
  collectionName: 'components_home_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos', true>;
    Button: Attribute.Component<'shared.button'>;
  };
}

export interface SharedVideoBlock extends Schema.Component {
  collectionName: 'components_content_blocks_video_blocks';
  info: {
    displayName: 'Video Block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.Media<'images' | 'videos'>;
    autoplay: Attribute.Boolean;
  };
}

export interface SharedTeamSection extends Schema.Component {
  collectionName: 'components_content_blocks_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    members: Attribute.Component<'shared.team-member', true>;
    calendly_link: Attribute.String;
  };
}

export interface SharedTeamMember extends Schema.Component {
  collectionName: 'components_content_blocks_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    photo: Attribute.Media;
    linkedin_url: Attribute.String;
  };
}

export interface SharedSocialLinks extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLinks';
    icon: 'apps';
  };
  attributes: {
    social: Attribute.Enumeration<['facebook', 'youtube', 'spotify', 'apple']>;
    link: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_parent']>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SharedService extends Schema.Component {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Service';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    case_service_tags: Attribute.Relation<
      'shared.service',
      'oneToMany',
      'api::service-tag.service-tag'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shareImage: Attribute.Media<'images' | 'videos'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedList extends Schema.Component {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    number: Attribute.Float;
  };
}

export interface SharedListPhone extends Schema.Component {
  collectionName: 'components_shared_list_phones';
  info: {
    displayName: 'ListPhone';
    icon: 'bulletList';
  };
  attributes: {
    number: Attribute.String;
  };
}

export interface SharedListAwards extends Schema.Component {
  collectionName: 'components_shared_list_awards';
  info: {
    displayName: 'ListAwards';
    icon: 'apps';
  };
  attributes: {
    media: Attribute.Media<'images'>;
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    linkTitle: Attribute.String;
    link: Attribute.Text;
  };
}

export interface SharedHeroBanner extends Schema.Component {
  collectionName: 'components_content_blocks_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    background_image: Attribute.Media<'images' | 'videos'>;
    video: Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedHeadingSignature extends Schema.Component {
  collectionName: 'components_shared_heading_signatures';
  info: {
    displayName: 'Heading Signature';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'>;
    signature: Attribute.String;
  };
}

export interface SharedFormType extends Schema.Component {
  collectionName: 'components_shared_form_types';
  info: {
    displayName: 'FormType';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    type: Attribute.Enumeration<['email', 'details', 'empty']>;
  };
}

export interface SharedFormBlock extends Schema.Component {
  collectionName: 'components_content_blocks_form_blocks';
  info: {
    displayName: 'Form Block';
  };
  attributes: {
    fields: Attribute.JSON;
    submit_url: Attribute.String;
  };
}

export interface SharedCtaSection extends Schema.Component {
  collectionName: 'components_content_blocks_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    button_text: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface SharedClients extends Schema.Component {
  collectionName: 'components_shared_clients';
  info: {
    displayName: 'Clients';
    description: '';
  };
  attributes: {
    ListClients: Attribute.Component<'shared.list-awards', true>;
    media: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
  };
}

export interface SharedClient extends Schema.Component {
  collectionName: 'components_content_blocks_clients';
  info: {
    displayName: 'Client';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedChapter extends Schema.Component {
  collectionName: 'components_content_blocks_chapters';
  info: {
    displayName: 'Chapter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedCaseGrid extends Schema.Component {
  collectionName: 'components_content_blocks_case_grids';
  info: {
    displayName: 'Case Grid';
  };
  attributes: {
    cases: Attribute.Relation<
      'shared.case-grid',
      'manyToMany',
      'api::cases.case-study'
    >;
  };
}

export interface SharedCallToAction extends Schema.Component {
  collectionName: 'components_shared_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'apps';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    Button: Attribute.Component<'shared.button'>;
    List: Attribute.Component<'shared.list', true>;
    media: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_top', '_parent']>;
  };
}

export interface SharedAwards extends Schema.Component {
  collectionName: 'components_shared_awards';
  info: {
    displayName: 'Awards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    ListAwards: Attribute.Component<'shared.list-awards', true>;
    media: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
  };
}

export interface SharedAwardsAndClients extends Schema.Component {
  collectionName: 'components_content_blocks_awards_clients';
  info: {
    displayName: 'Awards and Clients';
    description: '';
  };
  attributes: {
    awards: Attribute.Component<'shared.award', true>;
    clients: Attribute.Component<'shared.client', true>;
  };
}

export interface SharedAward extends Schema.Component {
  collectionName: 'components_content_blocks_awards';
  info: {
    displayName: 'Award';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media<'images' | 'videos'>;
    year: Attribute.String;
  };
}

export interface SharedApproach extends Schema.Component {
  collectionName: 'components_shared_approaches';
  info: {
    displayName: 'Approach';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos'>;
  };
}

export interface HistoryLegacyMediaBlock extends Schema.Component {
  collectionName: 'components_history_legacy_media_blocks';
  info: {
    displayName: 'Media Block';
    icon: 'apps';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos'>;
  };
}

export interface HistoryLegacyAbout extends Schema.Component {
  collectionName: 'components_history_legacy_abouts';
  info: {
    displayName: 'About';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos'>;
    year: Attribute.String;
  };
}

export interface HistoryLegacyAboutTwoImages extends Schema.Component {
  collectionName: 'components_history_legacy_about_two_images';
  info: {
    displayName: 'About Two Images';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos'>;
    mediaTwo: Attribute.Media<'images' | 'videos'>;
    year: Attribute.String;
  };
}

export interface CaseStudyVideo extends Schema.Component {
  collectionName: 'components_case_study_videos';
  info: {
    displayName: 'Video Block';
    icon: 'video';
    description: 'Bloco de v\u00EDdeo incorporado';
  };
  attributes: {
    title: Attribute.String;
    videoUrl: Attribute.String;
    description: Attribute.Text;
    ratio: Attribute.Enumeration<['16-9', '1-1', '9-16']> &
      Attribute.DefaultTo<'16-9'>;
  };
}

export interface CaseStudyTwoImages extends Schema.Component {
  collectionName: 'components_case_study_two_images';
  info: {
    displayName: 'Two Images';
    icon: 'layout';
    description: 'Duas imagens lado a lado';
  };
  attributes: {
    leftImage: Attribute.Media<'images'>;
    rightImage: Attribute.Media<'images'>;
    ratio: Attribute.Enumeration<['50-50', '60-40', '40-60']> &
      Attribute.DefaultTo<'50-50'>;
    spacing: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CaseStudyTwoColumn extends Schema.Component {
  collectionName: 'components_case_study_two_columns';
  info: {
    displayName: 'Two Column Section';
    description: 'Se\u00E7\u00E3o dividida em duas colunas para imagem, v\u00EDdeo ou texto';
  };
  attributes: {
    leftColumn: Attribute.Component<'case-study.column-content'>;
    rightColumn: Attribute.Component<'case-study.column-content'>;
    columnLayout: Attribute.Enumeration<['50-50', '60-40', '40-60']> &
      Attribute.DefaultTo<'50-50'>;
  };
}

export interface CaseStudyTextImage extends Schema.Component {
  collectionName: 'components_case_study_text_image';
  info: {
    displayName: 'Text & Image';
    icon: 'file-text';
    description: 'Texto com imagem ao lado';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    image: Attribute.Media<'images' | 'videos'>;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
    background: Attribute.String;
    link: Attribute.String;
  };
}

export interface CaseStudyTextBlock extends Schema.Component {
  collectionName: 'components_case_study_text_blocks';
  info: {
    displayName: 'Text Block';
    description: 'Bloco de texto com t\u00EDtulo e descri\u00E7\u00E3o rica';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    backgroundColor: Attribute.Enumeration<
      ['white', 'light-gray', 'dark-blue', 'primary']
    > &
      Attribute.DefaultTo<'white'>;
    textAlignment: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface CaseStudyQuote extends Schema.Component {
  collectionName: 'components_case_study_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
    description: 'Cita\u00E7\u00E3o ou frase de destaque';
  };
  attributes: {
    quote: Attribute.Text;
    author: Attribute.String;
    style: Attribute.Enumeration<['center', 'side']> &
      Attribute.DefaultTo<'center'>;
  };
}

export interface CaseStudyImageGrid extends Schema.Component {
  collectionName: 'components_case_study_image_grids';
  info: {
    displayName: 'Image Grid';
    description: 'Grid de imagens com legendas opcionais';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'case-study.grid-image', true>;
    columns: Attribute.Enumeration<['2', '3', '4']> & Attribute.DefaultTo<'3'>;
    showCaptions: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CaseStudyHeroSection extends Schema.Component {
  collectionName: 'components_case_study_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: 'Se\u00E7\u00E3o hero com imagem/v\u00EDdeo de fundo e texto sobreposto';
  };
  attributes: {
    backgroundMedia: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    overlayOpacity: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1;
        },
        number
      > &
      Attribute.DefaultTo<0.5>;
    textColor: Attribute.Enumeration<['white', 'black', 'primary']> &
      Attribute.DefaultTo<'white'>;
  };
}

export interface CaseStudyGridImage extends Schema.Component {
  collectionName: 'components_case_study_grid_images';
  info: {
    displayName: 'Grid Image';
    description: 'Imagem individual para o grid com legenda opcional';
  };
  attributes: {
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    caption: Attribute.String;
    link: Attribute.String;
  };
}

export interface CaseStudyGallery extends Schema.Component {
  collectionName: 'components_case_study_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'images';
    description: 'Bloco de galeria de imagens';
  };
  attributes: {
    images: Attribute.Media<'images' | 'videos', true>;
    layout: Attribute.Enumeration<['2-columns', '3-columns', 'masonry']> &
      Attribute.DefaultTo<'3-columns'>;
    showCaptions: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CaseStudyFullWidthMedia extends Schema.Component {
  collectionName: 'components_case_study_full_width_medias';
  info: {
    displayName: 'Full Width Media';
    description: 'M\u00EDdia em largura total (imagem ou v\u00EDdeo)';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    caption: Attribute.String;
    showCaption: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CaseStudyColumnContent extends Schema.Component {
  collectionName: 'components_case_study_column_contents';
  info: {
    displayName: 'Column Content';
    description: 'Conte\u00FAdo para uma coluna (imagem, v\u00EDdeo ou texto)';
  };
  attributes: {
    contentType: Attribute.Enumeration<['image', 'video', 'text']> &
      Attribute.Required &
      Attribute.DefaultTo<'image'>;
    media: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
    description: Attribute.RichText;
    backgroundColor: Attribute.Enumeration<
      ['white', 'light-gray', 'dark-blue', 'primary']
    > &
      Attribute.DefaultTo<'white'>;
    textColor: Attribute.Enumeration<['white', 'black', 'primary']> &
      Attribute.DefaultTo<'black'>;
  };
}

export interface ArticleVideo extends Schema.Component {
  collectionName: 'components_article_videos';
  info: {
    displayName: 'Video';
    description: 'V\u00EDdeo para artigos';
  };
  attributes: {
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images' | 'videos'>;
    caption: Attribute.String;
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    controls: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ArticleTwoImages extends Schema.Component {
  collectionName: 'components_article_two_images';
  info: {
    name: 'Two Images';
    icon: 'picture';
    displayName: 'Two Images';
    description: 'Display two images side by side';
  };
  attributes: {
    image1: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    image2: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    caption1: Attribute.String;
    caption2: Attribute.String;
  };
}

export interface ArticleTwoColumn extends Schema.Component {
  collectionName: 'components_article_two_columns';
  info: {
    displayName: 'Two Column';
    description: 'Layout de duas colunas para artigos';
  };
  attributes: {
    leftContent: Attribute.RichText;
    rightContent: Attribute.RichText;
    leftTitle: Attribute.String;
    rightTitle: Attribute.String;
    columnWidth: Attribute.Enumeration<['equal', 'left-heavy', 'right-heavy']> &
      Attribute.DefaultTo<'equal'>;
  };
}

export interface ArticleTextImage extends Schema.Component {
  collectionName: 'components_article_text_image';
  info: {
    name: 'Text Image';
    icon: 'layout';
    displayName: 'Text Image';
    description: 'Text content with accompanying image';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    caption: Attribute.String;
  };
}

export interface ArticleTextBlock extends Schema.Component {
  collectionName: 'components_article_text_blocks';
  info: {
    displayName: 'Text Block';
    description: 'Bloco de texto para artigos com t\u00EDtulo e conte\u00FAdo rico';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText & Attribute.Required;
    backgroundColor: Attribute.Enumeration<
      ['white', 'light-gray', 'dark-blue', 'primary']
    > &
      Attribute.DefaultTo<'white'>;
    textAlignment: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    textSize: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
  };
}

export interface ArticleRichText extends Schema.Component {
  collectionName: 'components_article_rich_texts';
  info: {
    displayName: 'Rich Text';
    description: 'Conte\u00FAdo de texto rico para artigos';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    textAlignment: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    textSize: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
  };
}

export interface ArticleQuote extends Schema.Component {
  collectionName: 'components_article_quotes';
  info: {
    displayName: 'Quote';
    description: 'Cita\u00E7\u00E3o destacada para artigos';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
    author: Attribute.String;
    authorRole: Attribute.String;
    backgroundColor: Attribute.Enumeration<
      ['white', 'light-gray', 'primary', 'dark']
    > &
      Attribute.DefaultTo<'light-gray'>;
    textColor: Attribute.Enumeration<['white', 'black', 'primary']> &
      Attribute.DefaultTo<'black'>;
  };
}

export interface ArticleImageGrid extends Schema.Component {
  collectionName: 'components_article_image_grid';
  info: {
    name: 'Image Grid';
    icon: 'grid';
    displayName: 'Image Grid';
    description: 'Grid layout with multiple images';
  };
  attributes: {
    images: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    title: Attribute.String;
    columns: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 4;
        },
        number
      > &
      Attribute.DefaultTo<3>;
    description: Attribute.Text;
  };
}

export interface ArticleHeroSection extends Schema.Component {
  collectionName: 'components_article_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: 'Se\u00E7\u00E3o hero para artigos com t\u00EDtulo, data e autor';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.Text;
    backgroundMedia: Attribute.Media<'images' | 'videos'>;
    overlayOpacity: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1;
        },
        number
      > &
      Attribute.DefaultTo<0.5>;
    textColor: Attribute.Enumeration<['white', 'black', 'primary']> &
      Attribute.DefaultTo<'white'>;
  };
}

export interface ArticleGridImage extends Schema.Component {
  collectionName: 'components_article_grid_image';
  info: {
    name: 'Grid Image';
    icon: 'grid';
    displayName: 'Grid Image';
    description: 'Single image in a grid layout';
  };
  attributes: {
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    caption: Attribute.String;
    gridSize: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
  };
}

export interface ArticleGallery extends Schema.Component {
  collectionName: 'components_article_gallery';
  info: {
    name: 'Gallery';
    icon: 'apps';
    displayName: 'Gallery';
    description: 'Image gallery with multiple images';
  };
  attributes: {
    images: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ArticleFullWidthMedia extends Schema.Component {
  collectionName: 'components_article_full_width_medias';
  info: {
    displayName: 'Full Width Media';
    description: 'M\u00EDdia em largura total para artigos';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    caption: Attribute.String;
    altText: Attribute.String;
  };
}

export interface ArticleColumnItem extends Schema.Component {
  collectionName: 'components_article_column_item';
  info: {
    name: 'Column Item';
    icon: 'layout';
    displayName: 'Column Item';
    description: 'Individual column content item';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText & Attribute.Required;
    image: Attribute.Media<'images' | 'videos'>;
  };
}

export interface ArticleColumnContent extends Schema.Component {
  collectionName: 'components_article_column_content';
  info: {
    name: 'Column Content';
    icon: 'layout';
    displayName: 'Column Content';
    description: 'Content organized in columns';
  };
  attributes: {
    title: Attribute.String;
    columns: Attribute.Component<'article.column-item', true>;
    layout: Attribute.Enumeration<
      ['two-column', 'three-column', 'four-column']
    > &
      Attribute.DefaultTo<'two-column'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'privacy.section-text': PrivacySectionText;
      'privacy.section-list': PrivacySectionList;
      'privacy.list-item': PrivacyListItem;
      'home.sub-title': HomeSubTitle;
      'home.slider': HomeSlider;
      'home.cases': HomeCases;
      'home.call-to-action': HomeCallToAction;
      'shared.video-block': SharedVideoBlock;
      'shared.team-section': SharedTeamSection;
      'shared.team-member': SharedTeamMember;
      'shared.social-links': SharedSocialLinks;
      'shared.slider': SharedSlider;
      'shared.service': SharedService;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.list': SharedList;
      'shared.list-phone': SharedListPhone;
      'shared.list-awards': SharedListAwards;
      'shared.links': SharedLinks;
      'shared.hero-banner': SharedHeroBanner;
      'shared.heading': SharedHeading;
      'shared.heading-signature': SharedHeadingSignature;
      'shared.form-type': SharedFormType;
      'shared.form-block': SharedFormBlock;
      'shared.cta-section': SharedCtaSection;
      'shared.clients': SharedClients;
      'shared.client': SharedClient;
      'shared.chapter': SharedChapter;
      'shared.case-grid': SharedCaseGrid;
      'shared.call-to-action': SharedCallToAction;
      'shared.button': SharedButton;
      'shared.awards': SharedAwards;
      'shared.awards-and-clients': SharedAwardsAndClients;
      'shared.award': SharedAward;
      'shared.approach': SharedApproach;
      'history-legacy.media-block': HistoryLegacyMediaBlock;
      'history-legacy.about': HistoryLegacyAbout;
      'history-legacy.about-two-images': HistoryLegacyAboutTwoImages;
      'case-study.video': CaseStudyVideo;
      'case-study.two-images': CaseStudyTwoImages;
      'case-study.two-column': CaseStudyTwoColumn;
      'case-study.text-image': CaseStudyTextImage;
      'case-study.text-block': CaseStudyTextBlock;
      'case-study.quote': CaseStudyQuote;
      'case-study.image-grid': CaseStudyImageGrid;
      'case-study.hero-section': CaseStudyHeroSection;
      'case-study.grid-image': CaseStudyGridImage;
      'case-study.gallery': CaseStudyGallery;
      'case-study.full-width-media': CaseStudyFullWidthMedia;
      'case-study.column-content': CaseStudyColumnContent;
      'article.video': ArticleVideo;
      'article.two-images': ArticleTwoImages;
      'article.two-column': ArticleTwoColumn;
      'article.text-image': ArticleTextImage;
      'article.text-block': ArticleTextBlock;
      'article.rich-text': ArticleRichText;
      'article.quote': ArticleQuote;
      'article.image-grid': ArticleImageGrid;
      'article.hero-section': ArticleHeroSection;
      'article.grid-image': ArticleGridImage;
      'article.gallery': ArticleGallery;
      'article.full-width-media': ArticleFullWidthMedia;
      'article.column-item': ArticleColumnItem;
      'article.column-content': ArticleColumnContent;
    }
  }
}
