# 凝聚态集满态射的判据　`prop.cond-epi`　·　说明
根 `../`

**($\implies$)** 设 $p$ 满，取 $y\in Y(F)$，$F=\beta I$。引理 1 给有限覆盖 $\{u_i:F_i\to F\}$ 与 $x_i\in X(F_i)$，使 $p(x_i)=y|_{F_i}$。令 $U=\coprod_i F_i$，$q:U\to F$ 为联合映射；覆盖意味着 $q$ 满。把 $x_i$ 拼成 $x\in X(U)\cong\prod_i X(F_i)$，则 $p(x)=q^{*}(y)$。引理 2 给截面 $s:F\to U$，于是 $x_F:=s^{*}(x)\in X(F)$ 满足 $p(x_F)=s^{*}q^{*}(y)=y$。所以 $X(F)\to Y(F)$ 满。

**($\Leftarrow$)** 设每个自由 $F$ 上 $X(F)\to Y(F)$ 满。取任意 $S$ 与 $y\in Y(S)$。由 `prop.chaus-quotient-of-free`，存在满射 $q:\beta I\to S$。拉回得 $q^{*}(y)\in Y(\beta I)$，假设给 $x\in X(\beta I)$ 使 $p(x)=q^{*}(y)$；于是 $q$ 就是一个覆盖、$x$ 是 $y$ 在其上的提升。由引理 1，$p$ 满。

> 续见 notes/prop.cond-epi.4.md
