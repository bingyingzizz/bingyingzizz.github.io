# 复形范畴是阿贝尔范畴　`prop.complexes-abelian`　·　说明
根 `../`

**证明。** 阿贝尔范畴的定义是：预阿贝尔 + 每个单态射正则（等价地：$\operatorname{coim} f \to \operatorname{im} f$ 是同构）。逐条验：
- **预阿贝尔**：复形范畴是加法范畴，而核与余核**逐项**取（见「复形范畴的性质」）✓；
- **$\operatorname{coim} \to \operatorname{im}$ 逐项同构**：$\mathcal{A}$ 里同构是逐项判断的（复形态射是同构 $\iff$ 每一层都是同构，因为逆映射可以逐层拼起来），所以只要逐项验 ✓；而每一层上 $\operatorname{coim} f^{n} \to \operatorname{im} f^{n}$ 是 $\mathcal{A}$ 里的同构 ✓；
- **逐项构造与微分相容**：核、余核、像、余像的微分都是「由原来复形的微分限制 / 诱导」得到的，满足 $d^{2} = 0$ 与交换性 —— 这是「逐项计算」的一般机制 ✓。
于是 $\mathcal{C}(\mathcal{A})$ 满足阿贝尔范畴的全部条件 ✓。∎

⭐ 这条是**整个同调代数的前提**：只有在 $\mathcal{C}(\mathcal{A})$ 里才能谈正合、才能谈同调 $H^{n}$。
