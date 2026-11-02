# 挠积给出挠元　`thm.tor-torsion`　·　说明
根 `../`

它的核恰是挠元 —— 若 $ka = 0$，则
$$a\otimes 1 = a\otimes\Bigl(k\cdot\frac{1}{k}\Bigr) = (ka)\otimes\frac{1}{k} = 0 ;$$
反之若 $a\otimes 1 = 0$，则由张量积的显式构造（或「$\mathbb{Q}$ 上有限个分母的通分」）存在 $k \ge 1$ 使 $ka = 0$ ✓。

于是 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A) \cong A_{\mathrm{tors}}$ ✓。

∎

⭐ **读法**：$\mathbb{Q}/\mathbb{Z}$ 是「所有有限阶循环群 $\mathbb{Z}/k$ 装在一起的容器」，而 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A)$ 恰好把 $A$ 里所有有限阶的元素挑出来。

同一条现象在 $\operatorname{Hom}$ 那一侧对应 $\operatorname{Hom}(\mathbb{Q}/\mathbb{Z}, A) = A_{\mathrm{tors}}$（对偶的那一半，Pontryagin 对偶里到处在用）。

📌 **一个健康检查**：若 $A$ 无挠（例如 $A = \mathbb{Z}$、$\mathbb{Q}$、$\mathbb{R}$），结论说 $\operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}/\mathbb{Z}, A) = 0$ —— 与「无挠 $\iff$ 平坦（PID 上）」一致 ✓。

> 续见 notes/thm.tor-torsion.3.md
