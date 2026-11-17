# imp.pid-fg-module-structure
`imp.pid-fg-module-structure` · 推出 · strong 边 · 根 `../`

`def.module` 模 + `def.pid` 主理想整环 + `thm.smith-normal-form` Smith 标准形 → `thm.pid-fg-module-structure` PID 上有限生成模的结构

唯一性。自由秩由 $r=\dim_{\operatorname{Frac}R}(M\otimes_R\operatorname{Frac}R)$ 决定。对素元 $p$ 与 $j\ge1$，令 $M[p^j]=\{m\in M:p^jm=0\}$，它由 $M$ 决定；$p^{j-1}M[p^j]/p^jM[p^j]$ 是 $R/(p)$-向量空间。对 $R/(d)$，写 $d=p^vu$（$p\nmid u$），由中国剩余定理 $R/(d)\cong R/(p^v)\oplus R/(u)$，且 $R/(d)[p^j]\cong R/(p^{\min(j,v)})$。于是
$$c_j(p):=\dim_{R/(p)}\frac{p^{j-1}M[p^j]}{p^jM[p^j]}=\#\{i:v_p(d_i)\ge j\}$$
由 $M$ 决定。整除链给出 $v_p(d_1)\le\cdots\le v_p(d_k)$，故
$$v_p(d_i)=\#\{j\ge1:c_j(p)\ge k-i+1\},$$
全部 $d_i$ 由 $M$ 决定（相差单位）。$K[x]$ 中取首一代表即唯一。$\blacksquare$
