# 挠积给出挠元　`thm.tor-torsion`　·　说明
根 `../`

⭐ **读法**：$\mathbb{Q}/\mathbb{Z}$ 是「所有有限阶循环群 $\mathbb{Z}/k$ 装在一起的容器」，而 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A)$ 恰好把 $A$ 里所有有限阶的元素挑出来。同一条现象在 $\operatorname{Hom}$ 那一侧对应 $\operatorname{Hom}(\mathbb{Q}/\mathbb{Z}, A) = A_{\mathrm{tors}}$（对偶的那一半，Pontryagin 对偶里到处在用）。

📌 **一个健康检查**：若 $A$ 无挠（例如 $A = \mathbb{Z}$、$\mathbb{Q}$、$\mathbb{R}$），结论说 $\operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}/\mathbb{Z}, A) = 0$ —— 与「无挠 $\iff$ 平坦（PID 上）」一致 ✓。

⚠️ 这里 **$\operatorname{Tor}_{1}$ 而不是 $\operatorname{Tor}_{0}$**：$\operatorname{Tor}_{0}(\mathbb{Q}/\mathbb{Z}, A) = (\mathbb{Q}/\mathbb{Z})\otimes A$，那是另一个东西（一般非零、且和挠元无关）。
