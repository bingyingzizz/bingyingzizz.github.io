# 交换环的纤维余积是张量积　`prop.ring-tensor-coproduct`　·　说明
根 `../`

**证明（验证推出的泛性质）。** 记 $D := B\otimes_{A} C$，$\beta : B\to D$、$\gamma : C\to D$ 为 $b\mapsto b\otimes 1$、$c\mapsto 1\otimes c$。
- **方块交换**：$\beta(a\cdot 1_{B}) = a\otimes 1 = 1\otimes a\cdot 1 = \gamma(a\cdot 1_{C})$，即 $\beta\circ(A\to B) = \gamma\circ(A\to C)$ ✓；
- **泛性质**：任给交换环 $E$ 与同态 $f : B\to E$、$g : C\to E$ 使 $f|_{A} = g|_{A}$，定义
$$\varphi\Bigl(\sum_{k} b_{k}\otimes c_{k}\Bigr) := \sum_{k} f(b_{k})\,g(c_{k}) \in E .$$
它是**良定义**的：$\otimes$ 的双线性关系逐条被 $f,g$ 的乘法性与 $f|_{A}=g|_{A}$ 满足（例如 $ab\otimes c - b\otimes ac \mapsto f(ab)g(c)-f(b)g(ac) = f(a)f(b)g(c) - f(b)g(a)g(c) = 0$）✓；由交换性 $\varphi$ 是环同态 ✓；且 $\varphi\beta = f$、$\varphi\gamma = g$ ✓。
- **唯一性**：$D$ 由 $\beta(B)\cup\gamma(C)$ 生成（$b\otimes c = \beta(b)\gamma(c)$），故在两个生成块上定死就唯一 ✓。
于是 $D$ 满足推出的泛性质，即 $B\otimes_{A}C = B\coprod

> 续见 notes/prop.ring-tensor-coproduct.2.md
