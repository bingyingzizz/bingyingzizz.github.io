# Riesz 表示（Hilbert）　`thm.riesz-hilbert`　·　说明
根 `../`

证法：$\varphi = 0$ 取 $y = 0$。

否则 $E = \ker\varphi$ 是**闭真**子空间，由正交分解取 $0 \ne z \in E^\perp$，令 $y = \overline{\varphi(z)}\, z / \|z\|^2$；

则 $x \mapsto \langle x, y\rangle$ 与 $\varphi$ 在 $E$ 上都为 $0$、在 $z$ 上相等，而 $H = E \oplus \mathbb{K} z$，故相等。

$\|y\| = \|\varphi\|$ 由 $\|\varphi\| = \sup_{\|x\| \le 1} |\langle x, y\rangle| = \|y\|$。

⭐ 意义：**Hilbert 空间是自己的对偶**（共轭线性）。Banach 空间一般不是：$(\ell^1)^* = \ell^\infty$、$(\ell^\infty)^* \supsetneq \ell^1$。这让 Hilbert 空间在「像有限维」这条路上走得最远：泛函与向量可以互换。

⚠️ 共轭线性：$\alpha y \mapsto \bar\alpha\,\varphi$。所以严格说不是「同构」而是「共轭等距同构」（anti-linear isometry）。

⚠️ 别与 $L^p$ 的 Riesz 表示混淆：那是 $(L^p)^* \cong L^q$（$1<p<\infty$，$1/p + 1/q = 1$），靠 Hölder 不等式；这条靠正交分解。两者只共享名字。

> 续见 notes/thm.riesz-hilbert.2.md
