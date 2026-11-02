# 可微的定义 $\implies$ 链式法则（线性映射的复合）
`imp.chain-rule-multi` · 推出 · strong 边 · 根 `../`

`def.total-differential` 可微与全微分 + `def.jacobian` Jacobi 矩阵 → `thm.chain-rule-multi` 多元链式法则

两式相加得 $R(h) = o(\|h\|)$。于是 $g \circ f$ 在 $a$ 可微，且导数正是线性映射 $M \circ L = Dg(f(a)) \circ Df(a)$（由全微分的唯一性）。取标准基写成矩阵即得 $J_{g \circ f}(a) = J_g(f(a))J_f(a)$。∎

> 第三步是全部的技术内容：**必须**显式地把 $o(\|k\|)$ 换成 $o(\|h\|)$。直接写 $Dg(f(a)+h)$ 是错的，因为可微性是在「$f$ 的像点附近」给的，不是在「$a$ 附近」给的。
