# FCHaus 上的预拓扑　`prop.fchaus-pretopology`
有限不交并给出自由紧 Hausforff 空间上的预拓扑
layer 16 · 定义 · 凝聚态集 · 范畴论+拓扑学

记 $\mathbf{FCHaus}$ 为**自由紧 Hausdorff 空间**（即 $\beta I$）构成的满子范畴。$\mathbf{FCHaus}$ 中的对象都是 $\mathrm{Cond}$ 的**投射对象**，满射 $S \to S'$ 总有截面 —— 于是**有限不交并给出 $\mathbf{FCHaus}$ 上的
> 陈述续见 `nodes/prop.fchaus-pretopology.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.free-compact-hausdorff` 自由紧 Hausdorff 空间：用到了定义 自由紧 Hausdorff 空间　proofs/def-dep.free-pretopology.md
- `def.projective-object` 投射 / 内射对象：用到了定义 投射 / 内射对象　proofs/def-dep.projective-pretopology.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.cond-equiv-fchaus` Cond 即 FCHaus 上的层

## 说明
为什么层条件「自动成立」：在自由紧 Hausdorff 空间上，满射有截面，所以「局部有原像」总能在整体上补出来（分离性由截面的存在直接给出）。**能取截面**是这里最省事的一点。
