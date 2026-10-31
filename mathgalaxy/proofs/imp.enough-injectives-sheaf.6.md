# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

**第五步：$f_{*}$ 保内射。** $f^{-1} \dashv f_{*}$ 且 $f^{-1}$ 正合；右伴随的左伴随正合 $\implies$ 右伴随保内射。故 $f_{*}$ 把 $X$ 上的内射层送到 $Y$ 上的内射层 —— 这就是「$f_{*}$ 这一侧有足够多内射」的确切含义，也是 $Rf_{*}$ 能用 $X$ 上的内射消解去算的理由。∎

> 「层范畴有足够多内射」的整个证明只用到两件事：取茎是正合的、直积可以逐分量提升。
