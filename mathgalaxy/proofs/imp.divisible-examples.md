# 可除的定义 $\implies$ 三个标准例子
`imp.divisible-examples` · 推出 · strong 边 · 根 `../`

`def.divisible-group` 可除群 + `thm.pid-injective-divisible` 内射等价于可除 → `ex.divisible-groups` 可除群的例子

**$\mathbb{Q}$**：给定 $q = a/b$（$b > 0$）与 $n \ne 0$，取 $x = a/(b n)$，则 $n x = a/b = q$ ✓。

**$\mathbb{Q}/\mathbb{Z}$**：$\mathbb{Q}$ 可除，由 `prop.divisible-quotient` 其商可除 ✓。

**Prüfer $p$-群**：$\mathbb{Z}[1/p]/\mathbb{Z} = \varinjlim_{k}\mathbb{Z}/p^{k}$，余极限沿「乘 $p$」取。给定元素与 $n = p^{s} u$（$p \nmid u$）：元素来自某一层 $\mathbb{Z}/p^{k}$，先在该层的第 $k + s$ 层里解 $p^{s} z = x$（这就是无限次除以 $p$ 的意思），再用 $u$ 在模 $p^{k+s}$ 中可逆把 $u$ 除掉 ✓。

三者由 `thm.pid-injective-divisible` 都是内射 $\mathbb{Z}$-模 ✓。∎

> 把这三个例子记住的用处：今后判断一个 $\mathbb{Z}$-模是否内射，先看它是不是这些家伙的直和项/直和。
