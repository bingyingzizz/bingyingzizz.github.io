# 光滑 $\implies$ 切映射的矩阵是 Jacobi 矩阵且满足链式法则
`imp.mf-diff-chain-rule` · 推出 · strong 边 · 根 `../`

`def.smooth-map` 光滑映射 + `def.jacobian` Jacobi 矩阵 → `def.differential-map` 切映射

$$\mathrm{d}(G \circ F)_{p}([\gamma]) = [(G \circ F) \circ \gamma] = [G \circ (F \circ \gamma)] = \mathrm{d}G_{F(p)}\bigl([F \circ \gamma]\bigr) = \mathrm{d}G_{F(p)}\bigl(\mathrm{d}F_{p}([\gamma])\bigr).$$

$[\gamma]$ 张成 $T_{p}N$，故 $\mathrm{d}(G \circ F)_{p} = \mathrm{d}G_{F(p)} \circ \mathrm{d}F_{p}$。同一句话在卡里就是 Jacobi 矩阵相乘，也就是多元链式法则。

**恒等。** $\mathrm{d}(\operatorname{id}_{N})_{p}([\gamma]) = [\operatorname{id}_{N} \circ \gamma] = [\gamma]$，故 $\mathrm{d}(\operatorname{id}_{N})_{p} = \operatorname{id}_{T_{p}N}$。

> 续见 proofs/imp.mf-diff-chain-rule.3.md
