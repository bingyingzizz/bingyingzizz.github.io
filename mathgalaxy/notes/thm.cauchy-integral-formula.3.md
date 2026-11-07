# Cauchy 积分公式　`thm.cauchy-integral-formula`　·　说明
根 `../`

**收尾**：外边界积分与 $r$ 无关（上面的等式对一切 $0 < r < d$ 成立），让 $r \to 0$ 得 $\oint_{\partial\Omega}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = 2\pi i\,f(z)$，即所求。∎

**一般闭曲线**：若 $\gamma$ 不包围 $z$，在 $\gamma$ 内部的区域上用 Cauchy 定理得 $\oint_{\gamma} = 0$；若 $\gamma$ 包围 $z$，在外边界与内圆之间的环域上同理论，得到带绕数的形式 $\operatorname{Ind}(\gamma, z)\,f(z) = \frac{1}{2\pi i}\oint_{\gamma}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta$。

⭐ **枢纽**：由它推出无穷次可微、Cauchy 不等式、Liouville、最大模原理、Taylor/Laurent 展开、留数定理 —— 本星系几乎所有结论都从这里长出来。

⚠ 被积函数 $f(\zeta)/(\zeta - z)$ 在 $\zeta = z$ 处**不**全纯，这正是「挖洞」不是技巧、而是必须的原因。
