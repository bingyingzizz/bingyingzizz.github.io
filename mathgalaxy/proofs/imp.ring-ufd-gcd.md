# UFD $\implies$ gcd 整环：取公共素因子指数的最小值
`imp.ring-ufd-gcd` · 推出 · strong 边 · 根 `../`

`def.ufd` 唯一分解整环 → `def.gcd-domain` gcd 整环

设 $A$ 是 UFD，$a, b$ 非零。把两者写成不可约元的乘积，按相伴类归并：



$$a \sim \prod_{i} p_{i}^{\,m_{i}}, \qquad b \sim \prod_{i} p_{i}^{\,n_{i}} .$$



（只保留在两者中至少一个里出现的 $p_{i}$。）



令 $d := \prod_{i} p_{i}^{\,\min(m_{i}, n_{i})}$。则 $d \mid a$ 且 $d \mid b$，故 $d$ 是公因子。



反之设 $c \mid a$、$c \mid b$。把 $c$ 分解，每个不可约因子 $q \mid c$ 都整除 $a$，而 UFD 里不可约即素，故 $q$ 与某个 $p_{i}$ 相伴，且它在 $c$ 里的重数 $\le \min(m_{i}, n_{i})$。于是 $c \mid d$。



所以 $d$ 是「被一切公因子整除」的那个公因子 —— 即 $\gcd$。UFD 是 gcd 整环。
