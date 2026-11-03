# 覆盖筛的四条等价　`prop.sieve-covering-equivalent`　·　说明
根 `../`

- (1) $\iff$ (2)：**这一跳要用「层化」**。$\widetilde{R}$ 是筛 $R$ 对应的**层**（这是 Grothendieck 拓扑里“覆盖 $\implies$ 层条件”的标准构造）：$R$ 覆盖 $\iff$ 层化后 $R$ 与 $X$ 的代表层一致。**这一步需要景的定义（覆盖筛的封闭性公理）**，不是形式推演。
- (2) $\iff$ (3)：**这是 Yoneda 引理的直接翻译**。$\varinjlim_{Y \in \mathcal{C}/R}\underline{Y}$ 就是把「$R$ 的元素」当成可表函子的余极限；而 $\widetilde R$ 的定义正是这个余极限。**不需要额外假设**（只用到余极限的存在性）。
- (3) $\iff$ (4)：**这一步要用「余极限 = 余积的商」**，于是「余极限等于 $\underline X$」等价于「$\coprod \underline Y \to \underline X$ 是满态射」。**关键假设是「景里有余积」** —— 若 $\mathcal{C}$ 是小范畴、$\underline{Y}$ 取在 $\mathbf{Set}$ 里，这一步自动成立；若景没有足够余积，则要另作解释（用筛的定义直接验证）。

> 续见 notes/prop.sieve-covering-equivalent.6.md
