(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{441:function(e,t,a){"use strict";a.r(t);var i=a(3),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fine-tune-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fine-tune-method"}},[e._v("#")]),e._v(" Fine Tune Method")]),e._v(" "),t("ClientOnly",[t("title-pv")],1),e._v(" "),t("p",[e._v("Fine-tuning is a process in machine learning, particularly in deep learning, where a pre-trained model is adapted to a new task or dataset. The goal is to leverage the knowledge learned by the model on a large dataset (often called the source domain) and apply it to a different but related task (the target domain). Here are some common fine-tuning methods in the past years:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Full Fine-Tuning: This involves training the entire model end-to-end, including the pre-trained weights. The model is updated on the new task, and all layers are allowed to learn new weights. This is suitable when the target domain is significantly different from the source domain.")])]),e._v(" "),t("li",[t("p",[e._v("Layer-Wise Pretraining: In this approach, the model is often divided into two parts: a base network and a classification layer. The base network is pre-trained on a large dataset, and the classification layer is fine-tuned on the target task. This is common in vision tasks like image classification.")])]),e._v(" "),t("li",[t("p",[e._v("Transfer Learning: This is a broader term that encompasses fine-tuning. It involves taking a model trained on one task and adapting it to another related task. The pre-trained model can be used as a starting point, and additional layers or modifications can be added to better suit the new task.")])]),e._v(" "),t("li",[t("p",[e._v("Freeze and Unfreeze: In this method, some layers of the pre-trained model are kept frozen (i.e., their weights are not updated), while others are allowed to learn new weights. This is useful when the lower layers (e.g., convolutional layers) have learned generic features that are useful for the new task, and only the higher layers (e.g., fully connected layers) need to be adapted.")])]),e._v(" "),t("li",[t("p",[e._v("Multi-Task Learning: This involves fine-tuning a model that was trained on multiple tasks simultaneously. The model learns to handle different tasks, and fine-tuning can be applied to improve performance on a specific task.")])]),e._v(" "),t("li",[t("p",[e._v("Domain Adaptation: This is a specialized form of fine-tuning where the model is adapted to perform well on a new domain. Techniques like adversarial training and domain adversarial neural networks (DANNs) are used to minimize the domain shift between the source and target domains.")])]),e._v(" "),t("li",[t("p",[e._v("Data Augmentation: While not a fine-tuning method per se, data augmentation is often used in conjunction with fine-tuning to increase the diversity of the training data and improve the model's ability to generalize.")])]),e._v(" "),t("li",[t("p",[e._v("Scheduled Sampling: This technique involves periodically sampling from the pre-trained model's output during fine-tuning, which can help prevent overfitting and improve generalization.")])]),e._v(" "),t("li",[t("p",[e._v("Model Pruning: In some cases, fine-tuning involves pruning the pre-trained model, removing less important weights or entire layers, and then training the reduced model on the new task.")])])]),e._v(" "),t("p",[e._v("These methods can be combined or modified based on the specific requirements of the target task and the differences between the source and target domains. The choice of fine-tuning method can significantly impact the performance of the adapted model.")]),e._v(" "),t("p",[e._v("Below are some SOTA methods to fine tuning LLM.")]),e._v(" "),t("h2",{attrs:{id:"lora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora"}},[e._v("#")]),e._v(" LoRA")]),e._v(" "),t("h3",{attrs:{id:"lora-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora-2"}},[e._v("#")]),e._v(" LoRA")]),e._v(" "),t("p",[e._v("The implementation process of LoRA is as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Add a bypass alongside the original pre-trained language model (PLM), perform a dimensionality reduction followed by an upscaling operation to simulate the so-called intrinsic rank.")]),e._v(" "),t("li",[e._v("During training, fix the parameters of the PLM and only train the dimensionality reduction matrix "),t("smalltex",[e._v("A")]),e._v(" and the upscaling matrix "),t("smalltex",[e._v("B")]),e._v(".")],1),e._v(" "),t("li",[e._v("The input and output dimensions of the model remain unchanged, and at the output, the BA is added to the parameters of the PLM.")]),e._v(" "),t("li",[e._v("Initialize "),t("smalltex",[e._v("A")]),e._v(" with a random Gaussian distribution and initialize "),t("smalltex",[e._v("B")]),e._v(" with a zero matrix, ensuring that the bypass matrix remains a zero matrix at the beginning of the training.")],1)]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/lora.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("Next, we will explain the implementation of LoRA from a formulaic perspective.\nAssuming you want to fine-tune a pre-trained language model (such as GPT-3) for a downstream task, the need arises to update the parameters of the pre-trained model, which can be represented by the following formula:")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("tex",[e._v("\nh = W_0 x + \\delta W x = W_0 x + BAx\n")])],1),e._v(" "),t("p",[t("smalltex",[e._v("W_0")]),e._v(" represents the parameters initialized in the pre-trained model, and ΔW represents the parameters that need to be updated. If full parameter fine-tuning is performed, its parameter volume equals the volume of "),t("smalltex",[e._v("W_0")]),e._v(" (for GPT-3, ΔW is approximately 175 billion). This shows that it is impossible for small-scale operations to fully fine-tune large language models.")],1),e._v(" "),t("p",[e._v('Building on the work of predecessors, it has been discovered that pre-trained language models have a lower "intrinsic dimension." Even when randomly projected into a smaller subspace during task adaptation, they can still learn effectively. Therefore, what LoRA does is to add a small parameter module to learn the change '),t("smalltex",[e._v("\\delta W")]),e._v(".")],1),e._v(" "),t("p",[e._v("During the training process, "),t("smalltex",[e._v("W_0")]),e._v(" remains fixed and unchanged, while only the matrices "),t("smalltex",[e._v("A")]),e._v(" and "),t("smalltex",[e._v("B")]),e._v(" contain the trainable parameters and are subject to change.")],1),e._v(" "),t("p",[e._v("In the inference process, there is no delay as the change is simply reintegrated back into the original model.")]),e._v(" "),t("p",[e._v("If you wish to switch tasks, during the task-switching process, you subtract "),t("smalltex",[e._v("BA")]),e._v(" and then replace it with $BA￥ that has been trained for another task.")],1),e._v(" "),t("h3",{attrs:{id:"intuition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intuition"}},[e._v("#")]),e._v(" Intuition")]),e._v(" "),t("p",[e._v("Large models possess the concept of intrinsic dimensionality, which means that only a small number of parameters need to be adjusted to achieve good performance on downstream tasks.")]),e._v(" "),t("p",[e._v("For a model with a parameter count of "),t("smalltex",[e._v("D")]),e._v(", training it implies searching for an effective solution within a "),t("smalltex",[e._v("D")]),e._v("-dimensional space. However, "),t("smalltex",[e._v("D")]),e._v(" might be redundant, and it may be possible to find an effective solution by optimizing only "),t("smalltex",[e._v("d")]),e._v(" parameters out of the total, where "),t("smalltex",[e._v("d")]),e._v(" is less than "),t("smalltex",[e._v("D")]),e._v(".")],1),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/lora.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("In summary, leveraging the intrinsic low-rank nature of large models, LoRA adds a bypass matrix to simulate full fine-tuning, making it a simple and effective solution for lightweight fine-tuning. This technology has been widely applied in the fine-tuning of large models, such as Alpaca, stable diffusion with LoRA, and it can be effectively combined with other parameter-efficient fine-tuning methods, such as State-of-the-art Parameter-Efficient Fine-Tuning (PEFT).")]),e._v(" "),t("h3",{attrs:{id:"qlora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qlora"}},[e._v("#")]),e._v(" QLoRA")]),e._v(" "),t("p",[e._v("LoRA is already quite impressive, but fine-tuning large models like LLaMA-65b can still be quite challenging, as loading a 65 billion-parameter model into the GPU is no small feat. QLoRA introduces a series of measures to further reduce GPU memory consumption, the most significant of which is quantizing the base model during the fine-tuning process, which further reduces the GPU memory usage caused by the number of parameters. The paper also found that the errors introduced by quantization can be eliminated during the fine-tuning process. As a result, QLoRA has become the most efficient fine-tuning solution for large language models (LLMs) to date.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/LoRA2.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("QLoRA (Quantized Low-Rank Adaptation) is an adaptation of the LoRA (Low-Rank Adaptation) technique, which is designed to fine-tune large language models (LLMs) efficiently. QLoRA introduces quantization to the low-rank matrices used in LoRA, aiming to further reduce computational costs and memory usage while maintaining performance. Here are the key implementation details and technical aspects of QLoRA:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Quantization: QLoRA applies quantization to the low-rank matrices that are injected into the model. This process reduces the precision of the model's parameters, which can lead to smaller model sizes and faster training times. Quantization is typically done to a lower bit-width, such as 8-bit or 16-bit, compared to the standard 32-bit floating-point precision.")])]),e._v(" "),t("li",[t("p",[e._v("Adaptation Process: Similar to LoRA, QLoRA adapts the pre-trained model's weights by adding low-rank matrices that are applied to the model's layers. These matrices are trained to adjust the model's behavior for the target task, while the majority of the model's weights remain frozen.")])]),e._v(" "),t("li",[t("p",[e._v("Memory and Computational Efficiency: By using quantized low-rank matrices, QLoRA reduces the memory footprint and computational complexity of the fine-tuning process. This is particularly beneficial for models with billions of parameters, where full fine-tuning can be prohibitively expensive.")])]),e._v(" "),t("li",[t("p",[e._v("Training: The quantized low-rank matrices are trained alongside the pre-trained model, with the goal of minimizing the difference between the adapted model's output and the target task's desired output. The training process is typically done using gradient descent with backpropagation, just like in standard fine-tuning.")])]),e._v(" "),t("li",[t("p",[e._v("Main Differences from LoRA: The primary distinction between QLoRA and LoRA is the use of quantization. While LoRA uses full-precision floating-point numbers for the low-rank matrices, QLoRA uses lower precision, which can lead to faster training and inference times, albeit with a potential trade-off in model accuracy.")])]),e._v(" "),t("li",[t("p",[e._v("Performance: QLoRA aims to achieve performance comparable to full fine-tuning while using significantly fewer parameters. This makes it an attractive option for tasks where full fine-tuning is not feasible due to computational constraints.")])])]),e._v(" "),t("h3",{attrs:{id:"qalora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qalora"}},[e._v("#")]),e._v(" QALoRA")]),e._v(" "),t("p",[e._v("QA-LoRA aims to achieve two objectives. First, during the fine-tuning stage, the pre-trained weights "),t("smalltex",[e._v("W")]),e._v(" are quantized to a low-bit representation, enabling LLMs to be fine-tuned on as few GPUs as possible. Second, after the fine-tuning stage, the weights "),t("smalltex",[e._v("W")]),e._v(" that have been fine-tuned and merged remain in a quantized form, allowing LLMs to be deployed with computational efficiency.")],1),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/QALoRA.png",width:"90%",height:"90%"}})]),e._v(" "),t("h4",{attrs:{id:"the-main-objective-is-twofold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-main-objective-is-twofold"}},[e._v("#")]),e._v(" The main objective is twofold:")]),e._v(" "),t("ul",[t("li",[e._v("During fine-tuning, the pretrained weights "),t("smalltex",[e._v("W")]),e._v(" are converted to a low-bit format to allow LLMs to be fine-tuned using minimal GPUs.")],1),e._v(" "),t("li",[e._v("Post fine-tuning, the adjusted and combined weights "),t("smalltex",[e._v("W'")]),e._v(" remain in a quantized format for efficient LLM deployment.")],1)]),e._v(" "),t("p",[e._v("QLoRA, a recent LoRA variant, achieved the first goal by quantizing W from FP16 to NF4 during fine-tuning. This joint optimization of quantization and adaptation is feasible as the accuracy difference between "),t("smalltex",[e._v("W")]),e._v(" and "),t("smalltex",[e._v("W~")]),e._v(" is offset by the low-rank weights "),t("smalltex",[e._v("s * AB")]),e._v(". However, after fine-tuning, the side weights "),t("smalltex",[e._v("s * AB")]),e._v(" are reintegrated to W~, reverting the final weights W' to FP16. Post-training quantization on W' can lead to notable accuracy loss, especially with a low bit width. Moreover, there’s no current optimization for NF4, hindering acceleration during fine-tuning and inference. Thus, QLoRA’s primary advantage is reducing memory usage during fine-tuning.")],1),e._v(" "),t("h4",{attrs:{id:"solution-group-wise-quantization-with-low-rank-adaptation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-group-wise-quantization-with-low-rank-adaptation"}},[e._v("#")]),e._v(" Solution: group-wise quantization with low-rank adaptation")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/AlgQALoRA.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("The primary objective is to merge the quantized "),t("smalltex",[e._v("W~")]),e._v(" and "),t("smalltex",[e._v("s * AB")]),e._v(" without resorting to high-precision numbers like FP16. In the original setting, this is unattainable due to the column-wise quantization of W and the unconstrained nature of matrices A and B. The first idea of the authors requires all row vectors of A to be identical. However, this approach results in a significant accuracy drop since it limits the rank of AB to 1, affecting the fine-tuning ability.")],1),e._v(" "),t("p",[e._v("To address this, the constraints for both quantization and adaptation are relaxed. W is partitioned into L groups, and individual scaling and zero factors are used for quantization within each group. This also requires row vectors of A within the same group to be identical. The approach requires with minimal code changes. Compared to LoRA and QLoRA, QA-LoRA offers time and memory benefits. It requires extra storage for scaling and zero factors but reduces the parameters of A.")]),e._v(" "),t("h2",{attrs:{id:"adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adapter"}},[e._v("#")]),e._v(" Adapter")]),e._v(" "),t("p",[e._v("In the pre-trained model, Adapter modules (as shown in the structure on the left side of the figure) are added to each layer (or certain layers), and during fine-tuning, the main body of the pre-trained model is frozen, with the Adapter modules learning knowledge specific to the downstream task. Each Adapter module consists of two feedforward sub-layers. The first feedforward sub-layer takes the output of the Transformer block as input and projects the original input dimension d to m, controlling the size of m to limit the parameter count of the Adapter module, typically with m << d. In the output stage, the input dimension is restored through the second feedforward sub-layer, projecting m back to d as the output of the Adapter module (as shown in the structure on the right side of the figure). By adding Adapter modules, an easily scalable downstream model is created. Whenever a new downstream task arises, Adapter modules are added to avoid the issues of full model fine-tuning and catastrophic forgetting. The Adapter method does not require fine-tuning all parameters of the pre-trained model. Instead, it introduces a small number of parameters specific to the task to store knowledge about that task, reducing the computational power required for model fine-tuning.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/Adapter.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("AdapterFusion divides the learning process into two stages:")]),e._v(" "),t("ol",[t("li",[e._v("Knowledge Extraction Phase: Train Adapter modules to learn specific knowledge for downstream tasks, encapsulating this knowledge within the parameters of the Adapter modules.")]),e._v(" "),t("li",[e._v("Knowledge Composition Phase: Fix the pre-trained model parameters Θ and the task-specific Adapter parameters Φ, introduce new parameters Ψ, and train with datasets from N downstream tasks, allowing AdapterFusion to learn how to combine the knowledge from N adapters to solve specific tasks. Parameters Ψ include Key, Value, and Query for each layer (as shown in the architecture on the right side of the figure). In each layer of the Transformer, the output of the feedforward network sub-layer serves as the Query, and the Value and Key inputs are the outputs of their respective adapters. The Query and Key are multiplied and passed into the SoftMax function, where AdapterFusion learns to weight the adapters based on the context. In a given context, AdapterFusion learns the parameter mixture of the trained adapters, identifying and activating the most useful adapters based on the given input.")])]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/AdapterFusion.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v("The authors address the issues of catastrophic forgetting, task interference, and training instability by dividing the training of adapters into knowledge extraction and knowledge composition. The addition of Adapter modules also leads to an increase in the overall parameter count of the model, which can reduce the model's performance during inference.")]),e._v(" "),t("p",[e._v("Adapter Fusion optimizes the Adapter approach by dividing the learning process into two stages to enhance performance on downstream tasks. The authors compare and contrast the performance of full model fine-tuning (Full), Adapter, and AdapterFusion across various datasets. AdapterFusion outperforms full model fine-tuning and Adapter in most cases, especially on MRPC (a dataset for similarity and entailment tasks) and RTE (a dataset for recognizing text entailment), where its performance is significantly better than the other two methods.")]),e._v(" "),t("h2",{attrs:{id:"prefix-tuning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prefix-tuning"}},[e._v("#")]),e._v(" Prefix-tuning")]),e._v(" "),t("p",[e._v('Prefix-tuning is a technique for fine-tuning large language models (LLMs) that involves adding a small set of "prefix" parameters to the model, which are specific to a particular task. This method aims to improve the model\'s performance on a given task without the need for full parameter fine-tuning, which can be computationally expensive and resource-intensive.')]),e._v(" "),t("p",[e._v("The concept of prefix-tuning was introduced to address the limitations of full parameter fine-tuning, where the entire model is updated with task-specific data. Prefix-tuning, on the other hand, only updates a small subset of parameters that are added as a prefix to the input text. These prefix parameters are designed to guide the model's behavior for the specific task at hand.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/Prefix.png",width:"90%",height:"90%"}})]),e._v(" "),t("ol",[t("li",[t("p",[e._v('Introduction of Prefix Parameters: In prefix-tuning, a few parameters are added to the beginning of the input sequence. These parameters, often referred to as "prefix tokens," are specific to the task and are used to provide context or instructions to the model.')])]),e._v(" "),t("li",[t("p",[e._v('Task-Specific Guidance: The prefix tokens serve as a form of task-specific guidance, similar to how a human might be given instructions before performing a task. For example, in a translation task, the prefix might include the word "Translate" followed by the source language and the text to be translated.')])]),e._v(" "),t("li",[t("p",[e._v("Model Training: During training, the model learns to adjust its output based on the prefix tokens. The rest of the model's parameters remain frozen, and only the prefix parameters are updated.")])]),e._v(" "),t("li",[t("p",[e._v("Efficiency: Prefix-tuning is efficient because it requires training only a small number of parameters compared to full fine-tuning. This makes it suitable for tasks with limited data or when computational resources are scarce.")])]),e._v(" "),t("li",[t("p",[e._v("Performance: Studies have shown that prefix-tuning can achieve comparable performance to full fine-tuning on certain tasks, especially in low-data settings or when dealing with unseen topics.")])]),e._v(" "),t("li",[t("p",[e._v("Challenges: Despite its efficiency, prefix-tuning may not always outperform full fine-tuning, particularly on more complex tasks or when the model needs to learn more nuanced behaviors specific to the task.")])])]),e._v(" "),t("h2",{attrs:{id:"p-tuning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-tuning"}},[e._v("#")]),e._v(" P-tuning")]),e._v(" "),t("p",[e._v("P-tuning, also known as Prompt Tuning, is a technique for fine-tuning large language models (LLMs) that involves the use of prompts to guide the model's behavior. It is a form of prompt engineering that aims to improve the model's performance on specific tasks by providing it with additional context or instructions through carefully crafted input text.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/PTuning.png",width:"90%",height:"90%"}})]),e._v(" "),t("p",[e._v('P-Tuning, as described in the paper "GPT Understands, Too" (2021), is an innovative approach to fine-tuning large language models (LLMs) that focuses on the use of prompts to guide the model\'s behavior. The method aims to overcome the limitations of traditional prompt-based fine-tuning, which can sometimes lead to suboptimal performance due to the discrete nature of the prompts and the potential for the model to get stuck in local optima.')]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Prompt Embedding: In P-Tuning, prompts are converted into learnable embedding layers. This is a departure from the typical approach of using fixed, discrete tokens as prompts, which can be problematic for continuous models like GPT.")])]),e._v(" "),t("li",[t("p",[e._v("Prompt Encoder: To address the issue of local optima, the authors propose using a prompt encoder, which consists of a multilayer perceptron (MLP) followed by a long short-term memory (LSTM) network. This encoder is trained to generate continuous prompt embeddings that are more flexible and can better capture the nuances of the task at hand.")])]),e._v(" "),t("li",[t("p",[e._v("Training Process: During training, the prompt encoder is used to generate prompt embeddings that are then concatenated with the input tokens. These combined embeddings are fed into the pre-trained language model, which is fine-tuned on the task-specific data.")])]),e._v(" "),t("li",[t("p",[e._v("Advantages:")])]),e._v(" "),t("li",[t("p",[e._v("Continuous Representation: By using a continuous representation for prompts, P-Tuning allows for smoother gradients and potentially better optimization.")])]),e._v(" "),t("li",[t("p",[e._v("Reduced Local Optima: The prompt encoder helps to avoid getting stuck in local optima by generating embeddings that are more closely related to the task requirements.")])]),e._v(" "),t("li",[t("p",[e._v("Improved Performance: The authors demonstrate that P-Tuning can achieve results comparable to full fine-tuning, especially for smaller models and on tasks where the model's architecture is not fully utilized.")])])]),e._v(" "),t("ClientOnly",[t("leave")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);