# 可微的定义 $\implies$ 链式法则（线性映射的复合）
`imp.chain-rule-multi` · 推出 · strong 边 · 根 `../`

`def.total-differential` 可微与全微分 + `def.jacobian` Jacobi 矩阵 → `thm.chain-rule-multi` 多元链式法则

$$(g \circ f)(a + h) = g\bigl( b + k \bigr) = g(b) + M(k) + \eta(k)\,\|k\| = (g \circ f)(a) + (M \circ L)(h) + \underbrace{M\bigl(\varepsilon(h)\|h\|\bigr) + \eta(k)\,\|k\|}_{=: R(h)}$$

**第三步：证明 $R(h) = o(\|h\|)$。** 第一项：$\|M(\varepsilon(h)\|h\|)\| \le \|M\|\,\|\varepsilon(h)\|\,\|h\| = o(\|h\|)$。第二项：由第一步 $\|k\| \le (\|L\|+1)\|h\|$，又 $k \to 0$ 故 $\|\eta(k)\| \to 0$，于是 $\|\eta(k)\|\,\|k\| \le \|\eta(k)\||(\|L\|+1)\|h\| = o(\|h\|)$。

> 续见 proofs/imp.chain-rule-multi.3.md
