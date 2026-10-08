# 自由紧 Hausdorff 空间　`def.free-compact-hausdorff`
自由紧 Hausdorff 空间（Free Compact Hausdorff Space）
layer 15 · 定义 · 紧 Haus 与 Stone · 范畴论+拓扑学

**自由紧 Hausdorff 空间**就是某个离散空间 $I$ 的 Stone–Čech 紧化 $F \cong \beta I$。称 $I$ 是 $F$ 的一组**基**：此时
> 陈述续见 `nodes/def.free-compact-hausdorff.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.chaus` 紧 Hausdorff 空间范畴：用到了定义 紧 Hausdorff 空间范畴　proofs/def-dep.chaus-free.md

## 它能推出什么 / 谁在用它
- 被 `prop.chaus-quotient-of-free` 紧 Haus 是自由的商 用
- 被 `prop.free-projective` 自由紧 Haus 是投射对象 用
- 被 `prop.fchaus-pretopology` FCHaus 上的预拓扑 用
- 被 `prop.fchaus-sheaf` FCHaus 上层的判据 用

- …另有出边，续页见 `nodes/def.free-compact-hausdorff.3.md`

## 说明
「自由」两个字在这里的含义和自由群、自由模完全一样：**在 $I$ 上没有任何约束**（$I$ 是离散的，所以从 $I$ 出发的映射随便给点就是连续的），于是「$F$ 到别处的映射」与「$I$ 上的一族点」是一回事。
