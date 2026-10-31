# 挠积给出挠元　`thm.tor-torsion`　·　说明
根 `../`

**证明（一条两项消解 + 一次长正合列）。** $\mathbb{Q}/\mathbb{Z}$ 有长度 $1$ 的自由消解
$$0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0 ,$$
（$\mathbb{Z} \hookrightarrow \mathbb{Q}$ 单、$\mathbb{Q} \twoheadrightarrow \mathbb{Q}/\mathbb{Z}$ 满，核恰好是 $\mathbb{Z}$）。张量 $A$ 取长正合列：
$$\operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}, A) \to \operatorname{Tor}_{1}^{\mathbb{Z}}(\mathbb{Q}/\mathbb{Z}, A) \to \mathbb{Z}\otimes A \xrightarrow{\ \alpha\ } \mathbb{Q}\otimes A .$$
$\mathbb{Q}$ 在 $\mathbb{Z}$ 上**平坦**（无挠），故第一项为零 ✓，于是 $\operatorname{Tor}_{1}(\mathbb{Q}/\mathbb{Z}, A) \cong \ker\alpha$ ✓。
再识别 $\alpha$：$\mathbb{Z}\otimes A \cong A$、$\mathbb{Q}\otimes A \cong A\otimes_{\mathbb{Z}}\mathbb{Q}$，$\alpha$ 就是 $a \mapsto a\otimes 1$。它的核恰是挠元 —— 若 $ka = 0$，则
$$a\otimes 1 = a\otimes\Bigl(k\cdot\frac{1}{k}\Bigr) = (ka)\otimes

> 续见 notes/thm.tor-torsion.2.md
