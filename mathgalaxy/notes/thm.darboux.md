# Darboux 定理　`thm.darboux`　·　说明
根 `../`

**证明骨架**（Moser 技巧）：先由线性代数（`thm.symplectic-normal-form`）在 $p$ 点找辛基，沿径向把 $\omega$ 拉成 $\omega_{0}$；再用 Moser 同伦 $\omega_{t} = (1-t)\omega_{0} + t\omega$ 构造一个流，其生成向量场 $X_{t}$ 由 $\iota_{X_{t}}\omega_{t} = -\theta$ 解出（$\theta$ 是 $\omega - \omega_{0}$ 的原函数，闭性在这里用上）。积分这个流就得到所需的微分同胚。**关键是 $\omega_{t}$ 始终非退化** —— 这靠「$\omega_{0}$ 与 $\omega$ 在 $p$ 点一致 + 邻域足够小」。

⭐ **这条定理是辛几何的「分水岭」**：它意味着不能用局部坐标区分辛流形，所以所有辛不变量（Gromov–Witten 不变量、Floer 同调、容量）都是**整体**的。Riemann 几何靠局部（曲率）起家，辛几何只能靠整体。

⚠️ 定理**不**说「辛流形都微分同胚于 $\mathbb{R}^{2n}$」：只给局部坐标，整体拓扑（如 $T^{2}$ 上的面积形式）不受约束。这是最常见的误读。

> 续见 notes/thm.darboux.2.md
