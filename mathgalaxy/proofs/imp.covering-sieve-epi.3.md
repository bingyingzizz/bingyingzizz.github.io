# 覆盖族生成覆盖筛 $\iff$ 余积满
`imp.covering-sieve-epi` · 推出 · strong 边 · 根 `../`

`def.sieve` 筛 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.mono` 单态射 / 满态射 → `prop.covering-sieve-epi` 覆盖筛即余积满射

**（$\Longrightarrow$）** 设 $R = h_{X}$。要证 $q$ 右可消。设 $u, v : X \to T$ 且 $u \circ q = v \circ q$。对每个 $i$ 有 $u \circ f_{i} = v \circ f_{i}$。对任意 $Y$ 与任意 $g : Y \to X$，由 $R = h_{X}$ 存在 $i$ 与 $h : Y \to X_{i}$ 使 $g = f_{i} \circ h$，于是

$$u \circ g = u \circ f_{i} \circ h = v \circ f_{i} \circ h = v \circ g$$

取 $Y = X$、$g = 1_{X}$ 即得 $u = v$。所以 $q$ 是满态射。∎

> 这条把「覆盖」这件听起来很几何的事，变成了一句纯箭头的话。以后凡是要在 site 上验覆盖，都可以改写成一个余积是否满射的问题。
