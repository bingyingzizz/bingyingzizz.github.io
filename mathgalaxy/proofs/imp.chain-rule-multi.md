# 可微的定义 $\implies$ 链式法则（线性映射的复合）
`imp.chain-rule-multi` · 推出 · strong 边 · 根 `../`

`def.total-differential` 可微与全微分 + `def.jacobian` Jacobi 矩阵 → `thm.chain-rule-multi` 多元链式法则

记 $L := Df(a)$、$M := Dg(b)$（$b = f(a)$）。由可微的定义存在函数 $\varepsilon, \eta$ 使

$$f(a + h) = f(a) + L(h) + \varepsilon(h)\,\|h\|, \qquad \|\varepsilon(h)\| \to 0;$$
$$g(b + k) = g(b) + M(k) + \eta(k)\,\|k\|, \qquad \|\eta(k)\| \to 0.$$

**第一步：估计 $k := f(a+h) - f(a)$ 的大小。** 由第一式

$$\|k\| \le \bigl( \|L\| + \|\varepsilon(h)\| \bigr)\|h\| \le (\|L\| + 1)\,\|h\|$$
对充分小的 $h$ 成立；特别地 $k \to 0$（$h \to 0$）。

**第二步：代入。**

> 续见 proofs/imp.chain-rule-multi.2.md
