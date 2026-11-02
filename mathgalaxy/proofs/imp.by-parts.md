# 乘积求导 + Newton–Leibniz $\implies$ 分部积分
`imp.by-parts` · 推出 · strong 边 · 根 `../`

`thm.ftc-riemann-part2` Newton–Leibniz 公式 → `prop.integration-by-parts` 分部积分

设 $F, G$ 可导、$F', G'$ 可积。乘积求导法则给出

$$(FG)' = F'G + FG'$$

左边可积（可积函数的乘积可积），故右边也可积。对三者在 $[a, b]$ 上用 Newton–Leibniz：

$$F(b)G(b) - F(a)G(a) = \int_a^b (FG)' = \int_a^b F'G + \int_a^b FG'$$

移项即得 $\int_a^b FG' = F(b)G(b) - F(a)G(a) - \int_a^b F'G$。∎

> 「可积函数的乘积可积」这一步值得留意：分部积分把 $FG'$ 的可积性**转嫁**给了 $F'G$ —— 所以公式的真正用处是「换一个更好积的对手」。
