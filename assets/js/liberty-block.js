wp.blocks.registerBlockStyle( 'liberty/embed-youtube', {
    name: 'fancy-quote',
    label: 'Fancy Quote'
} );


wp.blocks.registerBlockType(
    'liberty/embed-youtube',
    {
        title: 'Liberty Youtube',
        description: 'A block for embedding youtube video',
        icon: 'video-alt3',
        category: 'common',
        attributes: {
            content: {
                type: 'string',
            },
            videoId: {
                type: 'string',
            }
        },
        
        edit: function(props){

            function updateContent(event){
                props.setAttributes({content: event.target.value});
            }

            function loadPreview(){
                var vid_url = props.attributes.content;
                var vid_id = liberty_youtube_parser(vid_url);

                props.setAttributes({videoId: vid_id});
            }

            function liberty_youtube_parser(url){
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                var match = url.match(regExp);
                return (match&&match[7].length==11)? match[7] : false;
            }

            return React.createElement("div", 
                {
                    class: "liberty-embed-container"
                }, 
                 
                React.createElement("div", 
                    {
                        class: "liberty-embed-upload"
                    }, 
                    React.createElement("p", 
                        null, 
                        "Paste a link of the video you want to display on your site."
                    ), 
                    React.createElement("div", 
                        {
                            class: "liberty-embed-inputs"
                        }, 
                        React.createElement("input", 
                            {
                                type: 'text',
                                value: props.attributes.content,
                                onChange: updateContent
                            }
                        ), 
                        React.createElement("button", 
                            {
                                class: "is-primary",
                                onClick: loadPreview
                            },
                            'Embed'
                        )
                    )
                ),


                React.createElement("div", 
                    {
                        class: "liberty-embed-preview"
                    }, 
                    React.createElement("iframe", 
                        {
                            width: "560",
                            height: "315",
                            src: "https://www.youtube.com/embed/"+ props.attributes.videoId +"?autoplay=1"
                        }
                    )
                ),




            );




        },
        
        save: function(props){
            return React.createElement("div", 
                {
                    class: "liberty-embed-preview"
                }, 
                React.createElement("iframe", 
                    {
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/"+ props.attributes.videoId +"?autoplay=1"
                    }
                )
            );
        }
    }
);