# 挠积给出挠元　`thm.tor-torsion`　·　说明
根 `../`

它的核恰是挠元 —— 若 $ka = 0$，则
$$a\otimes 1 = a\otimes\Bigl(k\cdot\frac{1}{k}\Bigr) = (ka)\otimes\frac{1}{k} = 0 ;$$
反之若 $a\otimes 1 = 0$，则由张量积的显式构造（或「$\mathbb{Q}$ 上有限个分母的通分」）存在 $k \ge 1$ 使 $ka = 0$ ✓。

于是 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A) \cong A_{\mathrm{tors}}$ ✓。

∎

⭐ **读法**：$\mathbb{Q}/\mathbb{Z}$ 是「所有有限阶循环群 $\mathbb{Z}/k$ 装在一起的容器」，而 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A)$ 恰好把 $A$ 里所有有限阶的元素挑出来。

⚠️ 别把它搬到 $\operatorname{Hom}$ 那一侧：$\operatorname{Hom}(\mathbb{Q}/\mathbb{Z}, A)$ **一般不是** $A_{\mathrm{tors}}$（$A = \mathbb{Z}/2$ 时它为零 —— 任意 $h$ 满足 $h(x) = 2h(x/2) = 0$）。对偶那一侧的正确对应是 $\operatorname{Hom}(\mathbb{Z}/n, A) \cong A[n]$。

> 续见 notes/thm.tor-torsion.3.md
