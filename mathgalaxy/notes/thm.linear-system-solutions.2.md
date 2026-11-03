# 线性方程组的解结构　`thm.linear-system-solutions`　·　说明
根 `../`

- **有解 $\iff \operatorname{rank}A = \operatorname{rank}(A\mid b)$**：**这一步有真内容**，等价于「$b \in \operatorname{col}(A)$」。证明用行化简（Gauss 消元）—— 出现 $0 = c \ne 0$ 的行当且仅当秩不相等。**只用「$K$ 是域」**（域上才能自由消元；$\mathbb{Z}$ 上要换 Smith 标准形）。
- **解集 = 特解 + 齐次解**：**这一步是纯线性**（不需要域、不需要有限维）：若 $Ax_{0} = b$、$Au = 0$，则 $A(x_{0}+u) = b$；反之两解之差属于 $\ker A$。**仿射子空间不一定是子空间** —— 除非 $b = 0$。
- **$\dim \ker A = n - \operatorname{rank} A$**：**这一步要用秩-零化度定理**（`thm.rank-nullity`），这是唯一的维度输入；它本身要用有限维假设。
- **$m=n$、$\det A \ne 0$ $\implies$ 唯一解**：这条**只是前两条的特例**（$\det \ne 0 \iff \operatorname{rank} A = n \iff \ker A = 0$），并没有独立内容。

> 续见 notes/thm.linear-system-solutions.3.md
