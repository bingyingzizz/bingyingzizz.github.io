# Giraud 定理的证明
`imp.giraud` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.canonical-topology` 标准拓扑 + `def.generator` 生成元集 + `lem.representable-quotient` 可表示性的下降 → `thm.giraud` Giraud 定理

$\widehat{\mathcal{C}}$ 是拓扑斯，其中「有限极限 / 余积 / 等价关系」都是逐点算的、性质都好。

反射子范畴对**极限**封闭（含入函子是右伴随），反射保有限极限与余极限，两份合起来把拓扑斯的四条公理逐一运到 $\mathcal{T}$ 上：有限极限来自含入函子，余积与商来自「先在大范畴里算、再反射回去」，小生成元集取那些可表示预层的层化。

∎

**(1) $\implies$ (2)。** 给 $\mathcal{T}$ 配标准拓扑。要证每个层都可表示。任取层 $F$。

> 续见 proofs/imp.giraud.3.md
