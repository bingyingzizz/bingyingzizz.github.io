# imp.slice-topos
`imp.slice-topos` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.slice-category` 切片范畴 + `def.cocontinuous-functor` 余连续函子 → `prop.slice-topos` 切片拓扑斯

**证明。** (1) 余连续说的是「$j_{T}$ 把覆盖送到覆盖」，这由覆盖筛在切片里的定义直接核对 ✓，于是由「余连续函子给出拓扑斯态射」得到 $j_{T}$ ✓。

(2) 两个范畴的对象都是「$X \in \mathcal{C}$ 加一个截面 $s \in T(X)$」，层条件也逐字对应 ✓。

(3) 把两边的函子按定义写出来即得 ✓。

∎

> 骨架：切片等价 $\widetilde{\mathcal{C}/T}\simeq\widetilde{\mathcal{C}}/\widetilde{T}$ 与 $j_{T!},j_{T}^{-1}$ 的伴随对应只给路线，互逆自然同构与覆盖提升未逐项展开。
