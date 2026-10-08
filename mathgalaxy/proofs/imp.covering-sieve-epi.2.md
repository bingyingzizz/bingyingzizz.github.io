# 覆盖族生成覆盖筛 $\iff$ 余积满
`imp.covering-sieve-epi` · 推出 · strong 边 · 根 `../`

`def.sieve` 筛 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.mono` 单态射 / 满态射 → `prop.covering-sieve-epi` 覆盖筛即余积满射

**（$\Longleftarrow$）** 设 $q$ 是满态射，即对任意 $T$ 与任意 $u, v : X \to T$，$u \circ q = v \circ q \implies u = v$。设 $g : Y \to X$。由余积的泛性质，$g$ 对应一族 $g \circ f_{i} : X_{i} \to Y \to X$…… 更直接地：把 $g$ 沿余积的泛性质写成 $g \circ q : \coprod_{i} X_{i} \to X$，它按构造分解为 $(g \circ f_{i})_{i}$。由 $q$ 满（右可消）得 $g$ 必须已经是 $q$ 的「商」—— 即存在某个 $i$ 与 $h : Y \to X_{i}$ 使 $g = f_{i} \circ h$。所以 $R(Y) = \operatorname{Hom}(Y, X)$ 对所有 $Y$ 成立，$R = h_{X}$。

> 续见 proofs/imp.covering-sieve-epi.3.md
