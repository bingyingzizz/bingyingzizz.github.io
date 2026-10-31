# Cauchy 积分公式　`thm.cauchy-integral-formula`　·　说明
根 `../`

⭐ 证明的骨架就是**挖洞**：以 $z$ 为心挖掉一个闭小圆盘 $\overline{D(z, r)}$，在剩下的二连通区域 $\Omega_r$ 上对 $g(\zeta) = f(\zeta)/(\zeta - z)$ 用多连通 Cauchy–Goursat，得 $\oint_{\partial\Omega} g = \oint_{|\zeta - z| = r} g$。

再把 $g$ 拆成两块：$\dfrac{f(z)}{\zeta - z} + \dfrac{f(\zeta) - f(z)}{\zeta - z}$。第一块的积分算出 $2\pi i f(z)$；第二块的被积函数在 $\zeta = z$ 处有极限 $f'(z)$（因而有界），由 ML 不等式其积分不超过 $(\text{常数}) \cdot 2\pi r \to 0$。

⭐ 这条公式是复分析的**枢纽**：由它推出无穷次可微、Cauchy 不等式、Liouville、最大模原理、Taylor 展开、Laurent 展开、留数定理 —— 本批几乎所有结论。

⚠ 被积函数 $f(\zeta)/(\zeta - z)$ 在 $\zeta = z$ 处**不**全纯，所以不能把 Cauchy 定理直接用在整块 $\Omega$ 上。挖洞不是技巧，是必须的。
