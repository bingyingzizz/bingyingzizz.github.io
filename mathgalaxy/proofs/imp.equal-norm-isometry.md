# 反射把等长向量互送
`imp.equal-norm-isometry` · 推出 · strong 边 · 根 `../`

`def.bilinear-form` 双线性型 + `def.quadratic-form` 二次型 + `def.isometry` 等距与正交变换 → `lem.equal-norm-isometry` 等长向量由反射互达

若 $x=y$，取恒等。以下设 $x\ne y$。

**情形 1：$q(x-y)\ne0$。** 令 $s(z)=z-\frac{2\beta(z,x-y)}{q(x-y)}(x-y)$。直接计算 $q(s(z))=q(z)$、$\beta(s(z),s(w))=\beta(z,w)$，故 $s$ 是等距，且 $s(x-y)=-(x-y)$。由极化恒等式 $q(x-y)=2(q(x)-\beta(x,y))$，得 $s(x)=x-(x-y)=y$。

**情形 2：$q(x-y)=0$。** 此时 $\beta(x,y)=q(x)\ne0$，从而 $q(x+y)=2(q(x)+\beta(x,y))=4q(x)\ne0$。对 $v=x+y$ 作反射 $s_v$：$s_v(x)=x-\frac{2\beta(x,x+y)}{q(x+y)}(x+y)=x-(x+y)=-y$。再复合中心反转 $\iota(z)=-z$（它显然保 $\beta$），得 $\iota\circ s_v(x)=y$。

两种情形都给出 $N$ 的等距把 $x$ 送到 $y$。$\blacksquare$
