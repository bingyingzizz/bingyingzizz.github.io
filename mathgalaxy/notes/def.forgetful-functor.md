# 遗忘函子　`def.forgetful-functor`　·　说明
根 `../`

**忠实但通常不满**：底层映射相同不保证保持结构；$\mathbf{Top}\to\mathbf{Set}$、$\mathbf{Ab}\to\mathbf{Set}$ 都忠实而不满。

**左伴随是自由构造**：自由群、自由向量空间分别是相应遗忘函子的左伴随；$\mathbf{Top}\to\mathbf{Set}$ 的左伴随是**密着拓扑**（indiscrete，只含 $\emptyset$ 与全集），右伴随才是**离散拓扑** —— 两侧方向不能对调。

**极限与余极限**：代数类遗忘函子（$\mathbf{Mon}$、$\mathbf{Gr}$、$\mathbf{Ab}$、$A\text{-}\mathbf{Mod}$ 等）保所有极限（逐点构造），但一般不保余极限；拓扑类行为不同 —— $\mathbf{Top}\to\mathbf{Set}$ 反而保所有余极限（商拓扑逐点拼出）。所以「保不保」要按具体范畴看，不能一概而论。
