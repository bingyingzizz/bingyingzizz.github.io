# Euler–Maclaurin 公式：逐区间分部积分再望远镜
`imp.euler-maclaurin` · 推出 · strong 边 · 根 `../`

`def.bernoulli-number` 伯努利数 + `prop.integration-by-parts` 分部积分 + `def.riemann-integrable` Riemann 可积 → `thm.euler-maclaurin` 欧拉–麦克劳林公式

$\int_a^bP_{2r-1}f^{(2r-1)}=\frac{B_{2r}}{(2r)!}\bigl(f^{(2r-1)}(b)-f^{(2r-1)}(a)\bigr)-\int_a^b\frac{P_{2r}}{(2r)!}f^{(2r)}$。用 $P_{2r}'=2rP_{2r-1}$ 与 $P_{2r}$ 在整数点连续，逐区间分部积分并求和，边界项只剩 $a,b$ 两端，得 $2r$ 阶项与下一阶余项。归纳到 $2m$ 即得公式与余项。
**$m=1$ 检验**：$f=x^2$、$[0,2]$：左端 $0+1+4=5$；右端 $\frac83+2+\frac1{12}(4-0)=5$，$R_1=-\int_0^2\frac{P_2}{2}\cdot2\,dx=0$（$P_2$ 在一个周期上积分为零）。$\blacksquare$
