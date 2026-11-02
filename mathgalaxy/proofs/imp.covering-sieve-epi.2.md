# 覆盖族生成覆盖筛 $\iff$ 余积满
`imp.covering-sieve-epi` · 推出 · strong 边 · 根 `../`

`def.sieve` 筛 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.mono` 单态射 / 满态射 / 同构 → `prop.covering-sieve-epi` 覆盖筛即余积满射

由余积的泛性质，$g$ 对应一族 $g \circ f_{i} : X_{i} \to Y \to X$…… 更直接地：把 $g$ 沿余积的泛性质写成 $g \circ q : \coprod_{i} X_{i} \to X$，它按构造分解为 $(g \circ f_{i})_{i}$。

由 $q$ 满（右可消）得 $g$ 必须已经是 $q$ 的「商」—— 即存在某个 $i$ 与 $h : Y \to X_{i}$ 使 $g = f_{i} \circ h$。

所以 $R(Y) = \operatorname{Hom}(Y, X)$ 对所有 $Y$ 成立，$R = h_{X}$。

**（$\Longrightarrow$）** 设 $R = h_{X}$。

要证 $q$ 右可消。

设 $u, v : X \to T$ 且 $u \circ q = v \circ q$。

对每个 $i$ 有 $u \circ f_{i} = v \circ f_{i}$。

> 续见 proofs/imp.covering-sieve-epi.3.md
