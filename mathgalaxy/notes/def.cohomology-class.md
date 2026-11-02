# 上同调类　`def.cohomology-class`　·　说明
根 `../`

⭐ **类 $\ne$ 代表**：同一个上同调类有无穷多个代表（差任意上边缘）。所有关于类的运算都必须先验证「换代表不改变结果」—— 这就是同调代数里每一次「良定义性」检查的来源。模掉 $B^{n}$ 的唯一目的就是让这种检查变成一句话。

**几何含义**：de Rham 情形下 $[\omega] \in H^{k}_{dR}(M)$ 是「$\omega$ 的积分只依赖同调类」的那一半 —— Stokes 定理说 $\int_{c} \omega$ 在 $\omega \mapsto \omega + d\eta$ 与 $c \mapsto c + \partial b$ 下都不变，于是它其实是**上同调类与同调类的配对** $H^{k} \times H_{k} \to \mathbb{R}$。

这条配对是 de Rham 定理的骨架。

⚠️ **记号**：$[z]$ 与 $\bar z$ 都在用；有文献用 $\{z\}$。⚠️ 与「同调类」$[z] \in H_{n}$ 只差上下标，写证明时务必标清楚 $H^{n}$ 还是 $H_{n}$ —— 这是同调代数最常见的低级错误来源。

> 续见 notes/def.cohomology-class.2.md
