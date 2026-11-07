# Darboux 定理　`thm.darboux`　·　说明
根 `../`

📌 **这条证明依赖什么**：非退化性（解 $X_{t}$）、闭性（$\omega_{t}$ 闭、$\eta$ 有原函数 $\theta$）、图卡可缩（`lem.poincare-lemma`）、以及 ODE 的局部流（`thm.flow-local`）。$\omega_{0}$ 与 $\omega$ 在 $p$ 点相同是关键：否则 $\omega_{t}$ 在 $p$ 点可能退化，Moser 流走不动。本图 `thm.symplectic-normal-form` 目前只给线性代数版的证明提纲；这里把需要的辛基存在性重证了一遍，证明不依赖那个节点。

⭐ **这条定理是辛几何的「分水岭」**：它意味着不能用局部坐标区分辛流形，所以所有辛不变量（Gromov–Witten 不变量、Floer 同调、容量）都是**整体**的。Riemann 几何靠局部（曲率）起家，辛几何只能靠整体。

⚠️ 定理**不**说「辛流形都微分同胚于 $\mathbb{R}^{2n}$」：只给局部坐标，整体拓扑（如 $T^{2}$ 上的面积形式）不受约束。这是最常见的误读。

> 续见 notes/thm.darboux.6.md
