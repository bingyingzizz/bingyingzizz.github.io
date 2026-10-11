# 弱 Hausdorff 空间　`def.weak-hausdorff`
弱 Hausdorff 空间（Weak Hausdorff Space）
layer 6 · 定义 · 紧生成空间与弱 Hausdorff · 拓扑学

拓扑空间 $X$ 叫**弱 Hausdorff** 的，如果对每个连续映射 $f : S \to X$（$S$ 紧 Hausdorff），像 $f(S)$ 都在 $X$ 中**闭**。

## 为什么成立（入边，证明在 proofs/）
- `def.hausdorff` Hausdorff 空间：用到了定义 Hausdorff 空间　proofs/def-dep.weakhaus-hausdorff.md

## 它能推出什么 / 谁在用它
- 被 `prop.cgwh-fiber-product` 紧块的纤维积还是紧的 用
- 被 `prop.cgwh-closed` CGWH 的开闭子空间与滤过余极限 用
- 被 `prop.exact-sequence-topo-ab` 拓扑阿贝尔群正合列的搬运 用
- 被 `lem.weak-hausdorff-qseparated` 弱 Hausdorff 推出 拟分离 用
- 被 `lem.qseparated-underlying-weak-hausdorff` 拟分离 推出 底空间弱 Hausdorff 用
- 被 `prop.cg-wh-iff-qseparated` 紧生成：弱 Hausdorff ⟺ 拟分离 用
- 被 `prop.closed-inclusion-filtered-limit` 紧块沿闭含入拼出的空间 用
