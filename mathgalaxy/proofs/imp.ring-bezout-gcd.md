# Bézout 整环 $\implies$ gcd 整环：gcd 由线性组合直接给出
`imp.ring-bezout-gcd` · 推出 · strong 边 · 根 `../`

`def.bezout-domain` Bézout 整环 → `def.gcd-domain` gcd 整环

设 $A$ 是 Bézout 整环。取 $a, b \in A$，则理想 $(a, b)$ 是主理想，写 $(a, b) = (d)$。



由 $a \in (d)$、$b \in (d)$ 得 $d \mid a$、$d \mid b$；由 $d \in (a, b)$ 得存在 $u, v$ 使 $d = ua + vb$。



若 $c \mid a$、$c \mid b$，则 $c \mid ua + vb = d$。所以 $d$ 是被一切公因子整除的公因子 —— 即 $\gcd(a,b)$。故 $A$ 是 gcd 整环。



（这也说明 Bézout 整环里 Euclid 引理可以直接搬：$p \mid ab$ 时取 $(p, a) = (d)$ 论证，与 PID 的证明一字不差。）
