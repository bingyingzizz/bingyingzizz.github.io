# $\sum_{d\mid n}\mu(d) = [n=1]$：二项式展开
`imp.nt-mu-sum` · 推出 · strong 边 · 根 `../`

`def.mobius-function` Möbius 函数 → `thm.mu-sum` Möbius 和的恒等式

$n = 1$：只有 $d = 1$，和为 $1$。



$n > 1$：设 $n = p_{1}^{e_{1}}\cdots p_{r}^{e_{r}}$，$r \ge 1$。$\mu(d) \ne 0$ 只当 $d$ 由**互异**素因子组成，故



$$\sum_{d \mid n}\mu(d) = \sum_{S \subseteq \{1,\cdots,r\}} (-1)^{|S|} = \sum_{k=0}^{r}\binom{r}{k}(-1)^{k} = (1-1)^{r} = 0 .$$



正负项按 $|S|$ 配对抵消 —— 这就是全部内容。
