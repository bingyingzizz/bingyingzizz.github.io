# 闭子空间的正交投影　`thm.projection-subspace`　·　说明
根 `../`

证法：由凸闭集投影，(1) 的「$\implies$」把 $z$ 换成 $\pm z$ 消掉实部得 $\operatorname{Re}\langle x - y, z\rangle \le 0$ 对所有 $z \in E$，即 $x - y \perp E$；

「$\Longleftarrow$」用 $\|x - z\|^2 = \|x - y\|^2 + \|y - z\|^2 \ge \|x - y\|^2$。

(2) 用 $\alpha_1 x_1 + \alpha_2 x_2 - \alpha_1 P x_1 - \alpha_2 P x_2 \perp E$。

(3) 勾股定理。

⚠️ 「$E$ 闭」不能去掉：$E = $ 有限支撑序列在 $\ell^2$ 里稠密但不闭，最近点存在但**不落在 $E$ 里**，正交分解也失效。

⭐ 这条是 Hilbert 空间与一般 Banach 空间的最大区别之一：一般 Banach 空间里闭子空间不一定有补（$c_0 \subset \ell^\infty$ 就没有），所以「投影」这个词在 Banach 空间里不能乱用。
