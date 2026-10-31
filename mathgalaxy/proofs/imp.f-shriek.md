# 开浸入的 $j_!$ $\implies$ 一般 $f_!$
`imp.f-shriek` · 推出 · strong 边 · 根 `../`

`prop.open-immersion-shriek` 开浸入的 j_! + `def.six-functors` 6-函子形式 → `def.f-shriek` 紧支撑推前 f_!

对分离有限型 $f : X \to Y$，有交换图 $X_{\mathrm{ad}} \xrightarrow{j} X_{\mathrm{ad}/Y} \to Y_{\mathrm{ad}}$，$j$ 是开浸入（`prop.scheme-embeds-adic` 的类似论证）。定义

$$f_! := (f_{\mathrm{ad}/Y})_* \circ j_!.$$

$j_!$ 存在由 `prop.open-immersion-shriek`；$(f_{\mathrm{ad}/Y})_*$ 是正常推前。$f$ 固有时 $j$ 是同构，$f_! = (f^{\mathrm{ad}/Y})_*$。

**保直和。** $j_!$ 作为左伴随保余极限；$(f^{\mathrm{ad}/Y})_*$ 在仿射局部上是有限个遗忘函子的极限，保直和。故 $f_!$ 保直和，右伴随 $f^!$ 存在。$\blacksquare$
