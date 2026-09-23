# 分离公理模式 $\implies$ 空集存在
`imp.sep-to-empty` · 推出 · strong 边 · 根 `../`

`ax.sep` 分离公理模式 → `thm.empty` 空集存在

取任意集合 $a$（一阶逻辑的论域非空，故这样的 $a$ 存在；在 ZF 中也可由无穷公理提供）。

取公式 $\varphi (x) :\equiv ( x \ne x )$，它是矛盾式。分离公理模式给出集合

$$B = \{ x \in a : x \ne x \}$$

对任意 $x$，$x \in B \leftrightarrow ( x \in a \wedge x \ne x )$ 恒为假，故 $B$ 不含任何元素。
由外延公理，这样的 $B$ 唯一，记作 $\emptyset$。∎

> 严格地说，「论域非空」是一阶逻辑的约定，不属于 ZF 公理。若不喜欢这个约定，也可以先由无穷公理取出一个集合再分离。
