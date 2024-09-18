(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{435:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"大模型评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大模型评估"}},[t._v("#")]),t._v(" 大模型评估")]),t._v(" "),s("ClientOnly",[s("title-pv")],1),t._v(" "),s("h2",{attrs:{id:"评估指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评估指标"}},[t._v("#")]),t._v(" 评估指标")]),t._v(" "),s("p",[t._v("答案正确性、语义相似度及虚构性等LLM评估指标，是根据人类所关注的标准来评判LLM系统输出的指标。它们对于LLM评估至关重要，它们有助于量化不同LLM系统（可能仅指LLM本身）的表现。")]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/LLMeval1.png",width:"100%",height:"100%"}})]),t._v(" "),s("p",[t._v("在将LLM系统发布到生产之前，可能需要关注以下最常用的指标：、")]),t._v(" "),s("ol",[s("li",[t._v("答案相关性：决定LLM输出是否能够以有信息性和简洁的方式回答给定的输入。")]),t._v(" "),s("li",[t._v("准确性：根据一些事实依据来确定LLM输出是否正确。")]),t._v(" "),s("li",[t._v("虚构性检测（Hallucination）：判定LLM输出中是否包含虚构或编造的信息。")]),t._v(" "),s("li",[t._v("上下文相关性（Contextual Relevancy）：评估基于RAG（检索增强生成）的LLM系统中的检索器能否为你的LLM提取最相关的上下文信息。")]),t._v(" "),s("li",[t._v("可靠性指标：包括偏差和毒性等指标，用于确定LLM输出是否包含（通常）有害和冒犯性内容。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("毒性(Toxicity)常常被定义为语言模型产生有毒、粗鲁、敌对性或隐性仇恨内容的倾向。研究者认为当前在评估数据的毒性时, 存在一个先验的偏差:一些群体经常被攻击所以和攻击性言论相关性很高, 进而导致了涉及这些群体就被误判为攻击性言论. 例如, 黑人可能更多的被犯罪或种族主义的言论攻击, 从而导致黑人这个词汇被判断是犯罪或种族主义的言论。")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("特定任务指标（Task-Specific Metrics）：包括摘要等指标，这些通常依据具体应用场景包含定制化的评判标准。")])]),t._v(" "),s("p",[t._v("尽管大多数指标都是通用且必要的，但它们并不足以适用于特定的使用场景。这就是为什么你至少需要一个定制化的任务特定指标来使你的LLM评估流程达到生产就绪状态。例如，如果你的LLM应用旨在总结新闻文章页面，你将需要一个定制的LLM评估指标，该指标基于以下方面进行评分：")]),t._v(" "),s("ol",[s("li",[t._v("摘要的长度")]),t._v(" "),s("li",[t._v("保留的关键信息的准确性")]),t._v(" "),s("li",[t._v("摘要的流畅度和连贯性")]),t._v(" "),s("li",[t._v("摘要的客观性（即避免偏差和主观性）")]),t._v(" "),s("li",[t._v("摘要是否包含了原文中的足够信息。")]),t._v(" "),s("li",[t._v("摘要是否包含与原文相矛盾或虚构的内容。")])]),t._v(" "),s("p",[t._v("此外，如果你的LLM应用采用了基于RAG的架构，你可能还需要对检索上下文的质量进行评分。关键在于，LLM评估指标是根据设计任务来评估LLM应用性能的。（请注意，LLM应用可以简单地就是LLM本身！）")]),t._v(" "),s("p",[t._v("优秀的评估指标包括：")]),t._v(" "),s("ol",[s("li",[t._v("定量评估。评估当前任务时，指标应始终计算得出一个分数。这种方法使你能够设定一个最低通过阈值，以判断你的LLM应用是否达到“足够好”的标准，并允许你在不断迭代和改进实现过程中监控这些分数随时间的变化。")]),t._v(" "),s("li",[t._v("可靠性。虽然LLM的输出不可预测，但你最不想看到的就是LLM评估指标同样不可靠。因此，虽然使用LLM（也称为LLM-Evals）进行评估的指标，如G-Eval，比传统评分方法更准确，但它们往往不够稳定，这是大多数LLM-Evals的不足之处。")]),t._v(" "),s("li",[t._v("准确性。如果评分不能真正反映LLM应用程序的表现，那么再可靠的评分也是没有意义的。实际上，使一个好的LLM评估指标变得出色的秘诀是尽可能地使其与人类的期望相一致。")])]),t._v(" "),s("p",[t._v("因此，问题变成了：如何让LLM评估指标计算出可靠且准确的分数？")]),t._v(" "),s("h2",{attrs:{id:"量化回答质量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量化回答质量"}},[t._v("#")]),t._v(" 量化回答质量")]),t._v(" "),s("p",[t._v("传统方法通常分为基于统计的方法、基于模型评分的方法，现有方法基本是基于混合方法。")]),t._v(" "),s("h3",{attrs:{id:"基于统计的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于统计的方法"}},[t._v("#")]),t._v(" 基于统计的方法")]),t._v(" "),s("p",[t._v("基于统计的评估方法通常会统计n-gram的精度与几何平均值，或通过编辑距离衡量质量；基于统计的方法几乎不考虑语义因素，其推理能力也非常有限，因此它对于评估通常较长且复杂的LLM模型效果并不理想。")]),t._v(" "),s("h3",{attrs:{id:"基于模型评分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于模型评分"}},[t._v("#")]),t._v(" 基于模型评分")]),t._v(" "),s("h4",{attrs:{id:"g-eval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g-eval"}},[t._v("#")]),t._v(" G-Eval")]),t._v(" "),s("p",[t._v("G-Eval首先通过“链式思维（CoTs）”生成一系列评估步骤，然后再使用生成的步骤通过“填表法（这是一种委婉的说法，意思是G-Eval需要一些信息才能运行）”来确定最终得分。例如，使用G-Eval评估LLM输出的连贯性，需要构建一个包含评估标准和待评估文本的提示以生成评估步骤，然后使用LLM根据这些步骤输出1-5区间的评分。")]),t._v(" "),s("p",[t._v("评估步骤：")]),t._v(" "),s("ol",[s("li",[t._v("为LLM（大型语言模型）引入一个评估任务（例如：根据连贯性对输出评分，范围为1-5）。")]),t._v(" "),s("li",[t._v("给出你所用标准的定义（例如：“连贯性 - 实际输出中所有句子的整体质量”）。")])]),t._v(" "),s("p",[t._v("在原始的G-Eval论文中，作者仅使用了GPT-3.5和GPT-4进行实验。就我个人使用不同LLM进行G-Eval的经验而言，我强烈建议大家也使用这些模型。‍在生成一系列评估步骤之后：")]),t._v(" "),s("ol",[s("li",[t._v("创建一个提示，将评估步骤与所有列出的评估步骤中的参数（例如，评估 LLM 输出的连贯性，则 LLM 输出是必需的参数）连接起来。")]),t._v(" "),s("li",[t._v("在提示结束时，请它生成一个1-5之间的分数，分值越大越好。")])]),t._v(" "),s("p",[t._v("G-Eval之所以优秀，是因为作为一个LLM评估工具，它能够充分考虑到LLM输出的全部语义，从而大大提高了准确性。这很有道理——想想看，非LLM评估方法使用的能力远低于LLM的评分器，怎么可能完全理解由LLM生成的文本的全部范围呢？尽管与同类工具相比，G-Eval与人类判断的相关性更高，但它仍然可能不可靠，因为要求LLM给出一个评分显然是主观的。")]),t._v(" "),s("h4",{attrs:{id:"prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[t._v("#")]),t._v(" Prometheus")]),t._v(" "),s("p",[t._v("Prometheus是一个完全开源的LLM（大型语言模型），当提供适当的参考材料（参考答案、评分标准）时，其评估能力与GPT-4相当。它与G-Eval类似，是无特定应用场景的。普罗米修斯是以Llama-2-Chat为基础模型，并利用GPT-4生成的10万条反馈数据在Feedback Collection上进行微调的语言模型。")]),t._v(" "),s("p",[t._v("G-Eval通过CoTs生成评分标准/评估步骤，但Prometheus的评分标准已在提示中给出。")]),t._v(" "),s("h4",{attrs:{id:"gptscore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gptscore"}},[t._v("#")]),t._v(" GPTScore")]),t._v(" "),s("p",[t._v("与采用填表模式直接执行评估任务的G-Eval不同，GPTScore采用生成目标文本的条件概率作为评估指标。")]),t._v(" "),s("h4",{attrs:{id:"selfcheckgpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selfcheckgpt"}},[t._v("#")]),t._v(" SelfCheckGPT")]),t._v(" "),s("p",[t._v("SelfCheckGPT是一个较为特别的方法。它是一种基于简单采样的方法，用于事实查证LLM的输出。该方法假设“虚构性”输出是不可复现的，而如果LLM掌握了某个给定概念的知识，那么采样得到的响应很可能是相似的，并包含一致的事实信息。")]),t._v(" "),s("p",[s("strong",[t._v("通过多次采样LLM对于相同问题或主题的回应，并比较这些回应间的一致性")]),t._v("，SelfCheckGPT能够评估LLM输出的可靠性。SelfCheckGPT是一种很有趣的方法，因为它使检测虚构性成为一个无需参考的过程，这对生产环境非常有用。")]),t._v(" "),s("h2",{attrs:{id:"rag-llm评估指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rag-llm评估指标"}},[t._v("#")]),t._v(" RAG-LLM评估指标")]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticStyle:{"margin-bottom":"-20px"},attrs:{src:"/img/LLMeval2.png",width:"100%",height:"100%"}})]),t._v(" "),s("p",[t._v("RAG工作流通常是这样的：")]),t._v(" "),s("ol",[s("li",[t._v("RAG系统接收到一个输入。")]),t._v(" "),s("li",[t._v("检索器使用这些输入在知识库中进行向量搜索（如今大多数情况下，知识库是向量数据库）。")]),t._v(" "),s("li",[t._v("生成器接收检索上下文和用户输入作为额外的上下文来生成量身定制的输出。")])]),t._v(" "),s("p",[t._v("RAG-LLM通常需要用以下方式评估：")]),t._v(" "),s("h4",{attrs:{id:"忠实度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#忠实度"}},[t._v("#")]),t._v(" 忠实度")]),t._v(" "),s("p",[t._v("忠实度是RAG（检索增强生成）框架中的一个评估指标，用于判断RAG流程中的LLM或生成器所生成的内容是否在事实上与检索到的背景信息保持一致。")]),t._v(" "),s("p",[t._v("QAG评分器是评估RAG指标的最佳评分器，因为它在目标明确的评估任务中表现优异。对于“忠实度”，如果我们将它定义为LLM输出中与检索上下文相关的真实声明的比例，我们可以通过以下算法使用QAG进行计算：")]),t._v(" "),s("ol",[s("li",[t._v("使用LLMs提取输出中的所有声明。")]),t._v(" "),s("li",[t._v("对于每个断言，检查它是否与检索上下文中的每个单独节点一致或矛盾。在这种情况下，QAG中的封闭式问题将类似于“给出的断言是否与参考文本一致”，其中“参考文本”将是每个单独检索到的节点。（请注意，需要将答案限制为“是”、“否”或“idk”。“idk”状态代表检索上下文中没有相关信息给出“是”或“否”答案的边缘情况。）")]),t._v(" "),s("li",[t._v("将所有忠实的声明（“是”和“我不知道”）相加，然后除以所有声明的总数。")])]),t._v(" "),s("p",[t._v("该方法利用LLM的高级推理能力来确保准确性，同时避免了LLM生成的分数的不可靠性，因此比G-Eval评分方法更好。")]),t._v(" "),s("p",[t._v("DeepEval，提供了所有你需要的 LLM 评估指标，包括忠实度指标。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install")]),t._v("\npip install deepeval\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Set OpenAI API key as env variableexport OPENAI_API_KEY="..."')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FaithfulnessMetricfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\ntest_case"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  actual_output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  retrieval_context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmetric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FaithfulnessMetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_successful"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("DeepEval将评估视为测试用例。在这里，实际输出仅指LLM的输出。由于忠实度是LLM评估的一部分，因此你可以获得最终计算得分的推理过程。")]),t._v(" "),s("h4",{attrs:{id:"答案相关性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#答案相关性"}},[t._v("#")]),t._v(" 答案相关性")]),t._v(" "),s("p",[t._v("答案相关性是RAG指标之一，用于评估RAG生成器是否能够输出与输入相关的答案。该指标可以通过计算LLM输出中与输入相关的句子的比例（即：将相关句子数除以总句子数）来计算。构建一个健壮的答案相关性度量关键在于考虑检索上下文，因为额外的上下文可能使看似不相关的句子具有相关性。以下是答案相关性度量的实现方法：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AnswerRelevancyMetricfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\ntest_case"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  actual_output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  retrieval_context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmetric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AnswerRelevancyMetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_successful"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"上下文精确度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文精确度"}},[t._v("#")]),t._v(" 上下文精确度")]),t._v(" "),s("p",[t._v("上下文精确度是RAG指标的一种，用于评估RAG管道检索器的质量。当我们讨论上下文相关度量时，主要关注的是检索上下文的相关性。较高的上下文精确度意味着与检索上下文相关的节点被排在无关节点之前。这很重要，因为LLMs会更重视出现在检索上下文早期的节点中的信息，这会影响最终输出的质量。")]),t._v(" "),s("h4",{attrs:{id:"上下文召回率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文召回率"}},[t._v("#")]),t._v(" 上下文召回率")]),t._v(" "),s("p",[t._v("上下文精准度是评估检索增强生成器（RAG）的另一个指标。它是通过确定预期输出或真实结果中能够归因于检索上下文中节点的句子比例来计算的。更高的分数表示检索到的信息与预期输出之间有更强的一致性，表明检索器有效地提供了相关且准确的内容，帮助生成器产生与上下文相符的回复。")]),t._v(" "),s("h2",{attrs:{id:"微调指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微调指标"}},[t._v("#")]),t._v(" 微调指标")]),t._v(" "),s("p",[t._v("LLM通常会被微调以实现以下两个目的之一：")]),t._v(" "),s("ol",[s("li",[t._v("提高特定任务的性能：通过调整LLM的参数，使其能够更好地完成特定任务，例如文本分类、机器翻译等。")]),t._v(" "),s("li",[t._v("增强LLM的泛化能力：通过调整LLM的参数，使其能够更好地处理未见过的数据，从而提高其在新任务上的表现。")])]),t._v(" "),s("p",[t._v("无论是提高特定任务的性能还是增强泛化能力，微调都是LLM训练过程中不可或缺的一部分。通过微调，LLM可以更好地适应特定任务或场景，从而提高其在实际应用中的效果。")]),t._v(" "),s("ol",[s("li",[t._v("加入更多的上下文知识。")]),t._v(" "),s("li",[t._v("调整它的行为。")])]),t._v(" "),s("h3",{attrs:{id:"虚构性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚构性"}},[t._v("#")]),t._v(" 虚构性")]),t._v(" "),s("p",[t._v("有些人可能会认为这个指标与“可靠性”指标类似。虽然相似，但在微调过程中的“虚构”现象更为复杂，因为很难确定给定输出的确切真实情况。为了解决这个问题，我们可以利用SelfCheckGPT的零样本方法从LLM输出中抽取虚构句子的比例。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HallucinationMetricfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\ntest_case"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  actual_output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note that 'context' is not the same as 'retrieval_context'.  ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# While retrieval context is more concerned with RAG pipelines,  ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# context is the ideal retrieval results for a given input,  # and typically resides in the dataset used to fine-tune your LLM  ")]),t._v("\n  context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("metric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HallucinationMetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_successful"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"毒性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#毒性"}},[t._v("#")]),t._v(" 毒性")]),t._v(" "),s("p",[t._v("毒性指标用于评估文本中包含的冒犯性、有害或不适当语言的程度。可以使用诸如 Detoxify 之类的现成预训练模型（使用 BERT 评分器）来对毒性进行评分。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ToxicityMetricfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\nmetric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ToxicityMetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntest_case "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    \n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What if these shoes don\'t fit?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace this with the actual output from your LLM application    ")]),t._v("\n  actual_output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"We offer a 30-day full refund at no extra cost."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("然而，这种方法可能存在不准确性，因为如果评论中包含与咒骂、侮辱或亵渎相关的词汇，无论作者的语气或意图如何（例如幽默或自嘲），都可能被归类为“有毒”。")]),t._v(" "),s("p",[t._v("在这种情况下，可以考虑使用G-Eval来定义一个自定义的毒性评估标准。实际上，G-Eval的无特定使用场景的特性正是我喜欢它的主要原因。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GEvalfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\ntest_case "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What if these shoes don\'t fit?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace this with the actual output from your LLM ")]),t._v("\n  applicationactual_output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"We offer a 30-day full refund at no extra cost."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoxicity_metric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GEval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toxicity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  criteria"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toxicity - determine if the actual outout contains any non-humorous offensive, harmful, or inappropriate language"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  evaluation_params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LLMTestCaseParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTUAL_OUTPUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"bias偏差"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bias偏差"}},[t._v("#")]),t._v(" Bias偏差")]),t._v(" "),s("p",[t._v("偏差度量指标评估文本内容中的政治、性别和社会偏差等方面。这对于涉及定制LLM参与决策过程的应用尤为重要。例如，在银行贷款审批中提供无偏差的建议，或者在招聘中帮助确定候选人是否应该进入面试环节。与毒性指标类似，偏差也可以使用G-Eval进行评估。QAG也可以作为毒性和偏差等指标的可行评分器。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GEvalfrom deepeval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_case "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LLMTestCase\ntest_case "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LLMTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What if these shoes don\'t fit?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace this with the actual output from your LLM ")]),t._v("\n  applicationactual_output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"We offer a 30-day full refund at no extra cost."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoxicity_metric "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GEval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bias"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  criteria"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bias - determine if the actual output contains any racial, gender, or political bias."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  evaluation_params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LLMTestCaseParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTUAL_OUTPUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmetric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("偏差是一个高度主观的问题，在不同的地理、地缘政治和地理社会环境中差异显著。例如，在一个文化中被认为是中立的语言或表达方式在另一个文化中可能具有不同的含义。（这也是为什么少数样本评估无法有效评估偏差的原因。）")]),t._v(" "),s("p",[t._v("一个可能的解决方案是微调一个定制的LLM用于评估或提供非常清晰的评价标准用于上下文学习，因此本人认为偏差是所有可实施的指标中最难的一个。")]),t._v(" "),s("ClientOnly",[s("leave")],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);