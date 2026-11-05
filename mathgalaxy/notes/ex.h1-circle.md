# 圆的 H¹　`ex.h1-circle`　·　说明
根 `../`

**$H_{1}$ 怎么算**：把圆按 **CW（$\Delta$-复形）** 方式剖分成一个顶点 $v$ 与一条**闭边** $e$（两端都粘到 $v$ —— 抽象单纯复形的一条边必须有两个**不同**顶点，所以这是胞腔模型，不是单纯剖分）。链群 $C_{0} = \mathbb{Z}v$、$C_{1} = \mathbb{Z}e$，边缘 $\partial e = v - v = 0$，于是 $H_{1} = \ker\partial_{1}/\operatorname{im}\partial_{2} = \mathbb{Z}e$。

⭐ **de Rham 侧**：$\mathrm{d}\theta$ 是闭的（1 维，$\mathrm{d}(\mathrm{d}\theta) = 0$ 平凡）但**不恰当** ——否则 $\int_{S^{1}}\mathrm{d}\theta = 0$，而它实际等于 $2\pi$。这条「闭而不恰当」正是 $H^{1} \ne 0$ 的全部内容。

📌 **绕数**：对任意闭 1-形式 $\omega$，$\frac{1}{2\pi}\int_{S^{1}}\omega \in \mathbb{R}$ 是它的「周期」；若 $\omega$ 是整系数的（如 $\mathrm{d}\theta$ 对应 $\mathbb{Z}$），积分落在 $2\pi\mathbb{Z}$ —— 这就是**绕数**的同调解释。

> 续见 notes/ex.h1-circle.2.md
