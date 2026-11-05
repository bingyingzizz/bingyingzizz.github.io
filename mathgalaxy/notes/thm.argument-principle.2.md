# 辐角原理　`thm.argument-principle`　·　说明
根 `../`

⚠ **「简单」不能省**：断言的是未加权的 $Z - P$，只有**正向简单**闭曲线才成立。一般闭曲线的正确写法是按绕数加权：$\dfrac{1}{2\pi i}\oint_{\gamma}\dfrac{f'}{f} = \sum_k m_k\,n(\gamma, a_k) - \sum_j n_j\,n(\gamma, b_j)$（$a_k$ 为零点、$b_j$ 为极点，$n$ 是绕数，见 `def.winding-number` / `prop.winding-integral`）——右边那个 $n(f\circ\gamma, 0)$ 一直是**加权**量，所以等式两端只在「每个内部点绕数 $=1$」时变成 $Z - P$。
